'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useAuthModal } from '@/hooks/useAuthModal';
import { useAuth } from '@/hooks/useAuth';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, IMAGE_BASE } from '@/lib/constants';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const pathname = usePathname();
    const authModal = useAuthModal();
    const { isAuthenticated, user, logout } = useAuth();

    const isActive = (href: string) => {
        if (href === '/' && pathname === '/') return true;
        if (href !== '/' && pathname.startsWith(href)) return true;
        return false;
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        logout();
        setIsProfileMenuOpen(false);
        setIsMenuOpen(false);
    };

    return (
        <header className="h-fit w-full sticky top-0 z-50 bg-white border-b border-slate-100 shadow-md">
            {/* Desktop Navigation */}
            <div className='w-full px-4 sm:px-6 lg:px-8 hidden md:block'>
                <div className='max-w-7xl mx-auto flex items-center justify-between h-16 lg:h-20'>
                    {/* Logo (enlarged visually only) */}
                    <Link href="/" className="flex items-center shrink-0 hover:opacity-80 transition-opacity">
                        <Image
                            src={`${IMAGE_BASE}/SS-Logo.webp`}
                            alt="Social Shipping"
                            width={180}
                            height={72}
                            className="h-12 lg:h-14 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="md:flex justify-center items-center gap-8">
                        {NAV_LINKS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-base font-medium transition-all duration-200 border-b-2 pb-0.5 font-heading ${isActive(item.href)
                                    ? 'text-blue-600 border-blue-600'
                                    : 'text-slate-600 border-transparent hover:text-slate-900'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Auth Buttons (Desktop) */}
                    <div className="hidden md:flex items-center gap-3">
                        {isAuthenticated ? (
                            <div className="relative">
                                <button
                                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                                    className="px-4 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 border border-green-100 hover:border hover:border-green-200 font-medium transition flex items-center gap-2 cursor-pointer"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    {user?.name || 'Profile'}
                                </button>
                                {isProfileMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-100 overflow-hidden">
                                        <Link
                                            href="/dashboard"
                                            className="block px-4 py-3 text-slate-700 hover:bg-slate-50 transition"
                                        >
                                            Dashboard
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 transition font-medium"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center">
                                <div
                                    role="button"
                                    tabIndex={0}
                                    title="Login"
                                    onClick={() => authModal.openLogin()}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') authModal.openLogin(); }}
                                    className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:scale-105 focus:scale-105 focus:outline-none transition-transform cursor-pointer"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className='w-full px-4 sm:px-6 md:hidden'>
                <div className='flex items-center justify-between h-16'>
                    {/* Mobile Logo */}
                    <Link href="/" className="flex items-center shrink-0 hover:opacity-80 transition-opacity">
                        <Image
                            src={`${IMAGE_BASE}/SS-Logo.webp`}
                            alt="Social Shipping"
                            width={140}
                            height={56}
                            className="h-9 w-auto object-contain"
                            priority
                        />
                    </Link>

                    <div className="flex items-center gap-2">
                        {/* Mobile Auth Button */}
                        {isAuthenticated ? (
                            <button
                                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                                className="p-2.5 text-blue-600 bg-blue-50 rounded-lg transition cursor-pointer"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </button>
                        ) : (
                            <button
                                onClick={() => authModal.openLogin()}
                                className="p-2.5 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </button>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="p-2.5 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Profile Dropdown */}
                {isProfileMenuOpen && isAuthenticated && (
                    <div className="border-t border-slate-100 bg-white">
                        <div className="py-3 space-y-1">
                            <Link
                                href="/dashboard"
                                className="block px-4 py-3 text-slate-700 hover:bg-slate-50 transition font-medium"
                                onClick={() => setIsProfileMenuOpen(false)}
                            >
                                Dashboard
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 transition font-medium"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                )}

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="border-t border-slate-100 bg-white">
                        <nav className="flex flex-col py-3 space-y-0.5">
                            {NAV_LINKS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`px-4 py-3 text-base font-medium transition-all duration-200 block ${isActive(item.href)
                                        ? 'text-blue-600 border-l-4 border-blue-600 pl-4'
                                        : 'text-slate-600 hover:text-slate-900'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            {!isAuthenticated && (
                                <>
                                    <button
                                        onClick={() => {
                                            authModal.openLogin();
                                            setIsMenuOpen(false);
                                        }}
                                        className="px-4 py-3 text-left text-blue-600 hover:bg-blue-50 font-medium transition"
                                    >
                                        Login
                                    </button>
                                </>
                            )}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}

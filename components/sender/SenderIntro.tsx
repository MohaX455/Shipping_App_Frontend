export function SenderIntro() {
    return (
        <section className="w-full bg-gradient-to-b from-blue-50 to-white pt-12 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="mb-8 flex items-center gap-2 text-sm text-slate-600 font-body">
                    <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
                    <span className="text-slate-400">/</span>
                    <span className="text-blue-600 font-medium">For Senders</span>
                </div>

                {/* Title Section */}
                <div className="mb-4">
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 font-heading">
                        I am a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sender</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-600 font-body max-w-2xl">
                        Simply follow these four easy steps to start saving on shipping costs
                    </p>
                </div>
            </div>
        </section>
    );
}

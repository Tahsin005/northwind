export function CartSkeleton({ lines = 3 }) {
    const n = Math.min(Math.max(lines, 1), 8);
    return (
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            <ul className="space-y-4">
                {Array.from({ length: n }).map((_, i) => (
                    <li key={i} className="card card-side border border-base-300 bg-base-100 shadow-sm">
                        <div className="p-4">
                            <div className="skeleton h-24 w-24 rounded-box" />
                        </div>
                        <div className="card-body min-w-0 flex-row flex-wrap items-center justify-between gap-4">
                            <div className="min-w-0 flex-1 space-y-3">
                                <div className="skeleton h-6 w-48 max-w-full" />
                                <div className="skeleton h-4 w-28" />
                                <div className="flex flex-wrap items-center gap-3">
                                    <div className="skeleton h-8 w-28" />
                                    <div className="skeleton h-6 w-16" />
                                </div>
                            </div>
                            <div className="skeleton h-6 w-20" />
                        </div>
                    </li>
                ))}
            </ul>
            <aside className="card border border-base-300 bg-base-100 p-6 shadow-md">
                <div className="flex justify-between gap-4">
                    <div className="skeleton h-4 w-20" />
                    <div className="skeleton h-4 w-24" />
                </div>
                <div className="skeleton mt-6 h-12 w-full rounded-lg" />
                <div className="skeleton mt-4 h-10 w-full" />
            </aside>
        </div>
    );
}
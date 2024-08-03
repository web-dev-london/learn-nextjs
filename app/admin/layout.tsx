
interface Props {
    children: React.ReactNode
}

const AdminLayout = ({ children }: Props) => {
    return (
        <>
            <div
                className="flex"
            >
                <aside
                    className="bg-slate-200 mr-5 p-5"
                >
                    Admin Sidebar
                </aside>
                <div>
                    {children}
                </div>
            </div>
        </>
    );
}

export default AdminLayout;
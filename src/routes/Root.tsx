import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome to the Multi-Feature App</h1>
            <p className="text-gray-600">Select a feature from the menu to get started.</p>
            <Outlet />
        </div>
    );
}

export default RootLayout;
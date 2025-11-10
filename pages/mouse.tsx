import { useEffect, useState } from "react";

interface MousePosition {
    x: number;
    y: number;
}

// Export the hook
export function useMousePosition(): MousePosition {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return mousePosition;
}

// Component that uses the hook
const MousePage = () => {
    const mousePosition = useMousePosition();

    return (
        <div>
            <h1>Mouse Position Tracker</h1>
            <p>Current Mouse Position: X: {mousePosition.x}, Y: {mousePosition.y}</p>
        </div>
    );
};

export default MousePage;

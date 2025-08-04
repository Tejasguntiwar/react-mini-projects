import useWindowResize from "."




export default function useWindowResizeTest() {
    const windowSize = useWindowResize();
    const {width, height} = windowSize;

    return <div>
        <h1>Use Window Resize Hook</h1>
        <p>
            WIdth is {width}
        </p>
        <p>
            Height is {height}
        </p>
    </div>
}
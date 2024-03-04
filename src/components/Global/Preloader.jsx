export default function Preloader({ bgWidth, bgHeight, width, height, color }) {
    return (
        <div className='spinnerContainer' style={{ width: `${bgWidth}`, height: `${bgHeight}` }}>
            <div
                className='loadingSpinner'
                style={{
                    width: `${width}`,
                    height: `${height}`,
                    borderTop: `2px solid ${color}`,
                    borderRight: `2px solid ${color}`,
                }}
            >

            </div>
        </div>
    );
};

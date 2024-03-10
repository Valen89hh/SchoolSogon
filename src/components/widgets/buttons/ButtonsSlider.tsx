
function SampleNextArrow(props: any) {
    const { className, width, height, translate, onClick } = props;
    return (
        <svg className={className + " rounded-full"} style={{ display: "block", width, height, padding: "4px", background: "#19C37D", right: translate }}
            onClick={onClick}
            width="36" height="106" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5312 19.3229L21.8542 13L15.5312 6.67704" stroke="white" />
            <path d="M4.14584 13L21.6771 13" stroke="white" />
        </svg>

    );
}

function SamplePrevArrow(props: any) {
    const { className, width, height, translate, onClick } = props;
    return (
        <svg className={className + " rounded-full"} style={{ display: "block", width, height, padding: "4px", background: "#19C37D", left: translate, zIndex: "1" }}
            onClick={onClick}
            width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4688 6.67712L4.14587 13L10.4688 19.323" stroke="white" />
            <path d="M21.8541 13H4.32288" stroke="white" />
        </svg>
    );
}

export { SampleNextArrow, SamplePrevArrow }
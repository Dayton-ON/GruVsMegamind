import Link from "next/link";

const MyButton: React.FC = () => {
    return (
        <Link href = "/about">
            <button>About Us</button>
        </Link>
    );
};

export default MyButton;
/*only use this if this is the only function on page*/
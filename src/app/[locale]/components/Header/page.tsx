import Link from 'next/link';

export default function Header() {

    return (
        <header>
            <div className = 'flex justify-center bg-[#E71309] p-2'>
                <button>
                <Link href="/">
                    <img src="/pokemon-logo.png" alt="Logo" width={200} height={100} />
                </Link>
                </button>
            </div>
        </header>
    );
}
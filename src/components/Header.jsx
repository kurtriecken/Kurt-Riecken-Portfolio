import './Header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="kurt_picture">
                <a href="/"></a>
            </div>
            <div className='navbar'>
                <nav>
                    <a href="#">About me</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Resume</a>
                    <a href="#">Contact</a>
                </nav>
            </div>
        </div>
    )
}
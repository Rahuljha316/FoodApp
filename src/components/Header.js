const Title = ()=>(
    // <h1 id="title" key="h2">
    //     Food Villa
    // </h1>
    <a href="/">
    <img alt="logo"
    className="logo"
    src="https://scontent.fdel34-1.fna.fbcdn.net/v/t39.30808-6/302441959_486213156849687_1897954130219057783_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zxylPaJODMoAX9bWAPa&_nc_ht=scontent.fdel34-1.fna&oh=00_AfCrLlrtvtP8CTiC7G-u8Gre8Kj3xHzMc5qsHeBoj3h-bA&oe=63DEC464"
    ></img>
    </a>

)


const Header = ()=> {
    return (

        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}


export default Header;
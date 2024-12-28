import './Navbar.css';
export default function Navbar(){
    return(
        <div>
<head>
<title>Document</title>

</head>

<body>
<nav class="navbar">
<div class="logo">REAL ESTATE</div>
<ul class="nav-links">
<div class="menu">
<li><a href="/">Home</a></li>
<li><a href="/about">About</a></li>
<li class="services">
<a href="/service">Services</a>
<ul class="dropdown">
<li><a href="/recent">Buy</a></li>
<li><a href="/recent">Rent</a></li>
<li><a href="/recent">Sell</a></li>
</ul>
</li>
<li><a href="/Loginform">Login</a></li>
<li><a href="/reg">Signup</a></li>
</div>
</ul>
</nav>
 </body>     
        </div>
    );
}
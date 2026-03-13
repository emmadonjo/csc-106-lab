# Lexihim.github.io
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AuraMode</title>

<style>
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial, Helvetica, sans-serif;
}

body{
background:linear-gradient(135deg,#0f0c29,#302b63,#24243e);
color:white;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;
}

h1{
font-size:60px;
letter-spacing:2px;
background:linear-gradient(90deg,#00f2ff,#ff00d4);
-webkit-background-clip:text;
color:transparent;
animation: glow 3s infinite alternate;
}

p{
margin-top:15px;
font-size:18px;
opacity:0.8;
}

button{
margin-top:30px;
padding:15px 40px;
border:none;
border-radius:30px;
font-size:16px;
background:linear-gradient(90deg,#ff00d4,#00f2ff);
color:white;
cursor:pointer;
transition:0.3s;
}

button:hover{
transform:scale(1.1);
box-shadow:0 0 20px rgba(255,255,255,0.4);
}

@keyframes glow{
from{filter:drop-shadow(0 0 5px cyan);}
to{filter:drop-shadow(0 0 25px magenta);}
}

footer{
position:absolute;
bottom:20px;
font-size:14px;
opacity:0.6;
}
</style>
</head>

<body>

<h1>AuraMode</h1>
<p>Enter the future of style and creativity</p>

<button onclick="alert('Welcome to AuraMode 🚀')">
Enter
</button>

<footer>
© 2026 AuraMode
</footer>

</body>
</html>

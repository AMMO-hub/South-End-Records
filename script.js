/* Grundinställningar */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    background-color: #111;
    color: #eee;
}

header {
    background-color: #1a1a1a;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo img {
    width: 80px;
    height: 80px;
    margin-right: 15px;
    border-radius: 50%;
    transition: transform 0.3s ease;
}

.logo img:hover {
    transform: rotate(15deg) scale(1.1);
}

.logo h1 {
    font-size: 2em;
    margin: 0;
}

main {
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
}

section {
    margin-bottom: 40px;
}

h2 {
    border-bottom: 2px solid #555;
    padding-bottom: 5px;
    margin-bottom: 15px;
}

.products ul, .news ul {
    list-style: none;
    padding: 0;
}

.product {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    background-color: #1a1a1a;
    margin-bottom: 10px;
    border-radius: 8px;
    transition: background 0.3s, transform 0.3s;
    cursor: pointer;
}

.product:hover {
    background-color: #333;
    transform: scale(1.02);
}

footer {
    text-align: center;
    padding: 20px;
    background-color: #1a1a1a;
    color: #aaa;
}

.contact p {
    line-height: 1.6;
}

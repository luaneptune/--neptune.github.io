async function obfuscateCode() {
    const luaCode = document.getElementById("luaCode").value;
    
    const response = await fetch("http://thor.pylex.software:12111/obfuscate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: luaCode })
    });

    const data = await response.json();
    document.getElementById("output").innerText = data.obfuscated_code;
}

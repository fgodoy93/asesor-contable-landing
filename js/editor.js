// editor.js
document.addEventListener("DOMContentLoaded", () => {
    // Check if '?edit=true' is in the URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('edit') === 'true') {
        enableEditor();
    }
});

function enableEditor() {
    console.log("Modo de edición activado.");
    
    // 1. Encontrar todos los elementos editables y habilitarlos
    const editables = document.querySelectorAll('[data-editable="true"]');
    editables.forEach(el => {
        el.setAttribute('contenteditable', 'true');
        // Añadir algo de estilo visual para mostrar qué es editable
        el.style.border = "2px dashed #4f46e5";
        el.style.padding = "4px";
        el.style.borderRadius = "4px";
        el.style.background = "rgba(79, 70, 229, 0.05)";
        el.style.transition = "all 0.2s";
        
        el.addEventListener('focus', () => { el.style.background = "rgba(79, 70, 229, 0.15)"; });
        el.addEventListener('blur', () => { el.style.background = "rgba(79, 70, 229, 0.05)"; });
    });

    // 2. Crear panel flotante de Guardar
    const panel = document.createElement('div');
    panel.id = "local-admin-panel";
    panel.style.position = "fixed";
    panel.style.bottom = "20px";
    panel.style.right = "20px";
    panel.style.background = "#ffffff";
    panel.style.border = "1px solid #e5e7eb";
    panel.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.3)";
    panel.style.padding = "16px";
    panel.style.borderRadius = "12px";
    panel.style.zIndex = "99999";
    panel.style.display = "flex";
    panel.style.flexDirection = "column";
    panel.style.gap = "10px";

    panel.innerHTML = `
        <h3 style="margin:0; font-weight:bold; color:#4338ca;">Modo Edición ✏️</h3>
        <p style="margin:0; font-size:12px; color:#6b7280; max-width:200px;">Edita los textos de la página haciendo clic en los recuadros. Cuando termines, descarga el código resultante.</p>
        <button id="btn-save-html" style="background:#4338ca; color:white; border:none; padding:10px 16px; border-radius:8px; font-weight:bold; cursor:pointer;">💾 Descargar HTML</button>
        <a href="index.html" style="font-size:12px; color:#ef4444; text-align:center; text-decoration:none;">Cancelar y Salir</a>
    `;

    document.body.appendChild(panel);

    // 3. Lógica para Guardar y Descargar (Exportar HTML)
    document.getElementById('btn-save-html').addEventListener('click', () => {
        // - Crear un clon del HTML actual para no estropear la página visualmente mientras se descarga
        const docClone = document.documentElement.cloneNode(true);
        
        // - Quitar el panel flotante del clon
        const panelInClone = docClone.querySelector('#local-admin-panel');
        if (panelInClone) panelInClone.remove();

        // - Limpiar los elementos editables en el clon
        const editablesInClone = docClone.querySelectorAll('[data-editable="true"]');
        editablesInClone.forEach(el => {
            el.removeAttribute('contenteditable');
            // Remover estilos inline inyectados
            el.style.border = "";
            el.style.padding = "";
            el.style.borderRadius = "";
            el.style.background = "";
            el.style.transition = "";
            // Si el style queda vacío, borrar el atributo
            if (!el.getAttribute('style')) {
                el.removeAttribute('style');
            }
        });

        // - Obtener HTML como string
        const htmlContent = "<!DOCTYPE html>\n" + docClone.outerHTML;

        // - Crear un Blob y trigger descend
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'index.html';
        document.body.appendChild(a);
        a.click();
        
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            alert("✅ ¡Archivo index.html descargado! Reemplázalo en tu carpeta del proyecto y estarás listo.");
        }, 100);
    });
}

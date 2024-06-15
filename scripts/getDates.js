function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
}

function getLastModified() {
    return document.lastModified;
}

document.getElementById('year').textContent = getCurrentYear();
document.getElementById('lastModified').textContent = getLastModified();
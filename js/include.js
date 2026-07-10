document.addEventListener("DOMContentLoaded", () => {
    // Fetch Header
    fetch('/portifolio-abelv/components/header.html')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load header');
            return response.text();
        })
        .then(data => {
            const headerEl = document.getElementById('header-placeholder');
            if (headerEl) headerEl.innerHTML = data;
        })
        .catch(err => console.error(err));

    // Fetch Footer
    fetch('/portifolio-abelv/components/footer.html')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load footer');
            return response.text();
        })
        .then(data => {
            const footerEl = document.getElementById('footer-placeholder');
            if (footerEl) footerEl.innerHTML = data;
        })
        .catch(err => console.error(err));
});

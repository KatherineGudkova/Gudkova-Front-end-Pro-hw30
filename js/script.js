document.addEventListener('DOMContentLoaded', function() {
    const addressInput = document.getElementById('addressInput');
    const linkButton = document.getElementById('linkButton');

    linkButton.addEventListener('click', function() {
        const link = addressInput.value.trim();
        const protocol = /^(http|https):\/\//i;

        if (!protocol.test(link)) {
            window.location.href = 'http://' + link;
        } else {
            window.location.href = link;
        }
    });
});
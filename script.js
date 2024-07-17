function copyToClipboard(id) {
    var textarea = document.getElementById(id);
    textarea.select();
    document.execCommand('copy');
    // alert('Copied to clipboard!');
}

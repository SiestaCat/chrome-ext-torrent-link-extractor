var allLinksHrefs = Array.from(document.querySelectorAll('a')).filter(link => (link.href.endsWith('.torrent') || link.href.startsWith('magnet:'))).map(link => link.href);

var blob = new Blob([allLinksHrefs.join('<br/>')], { type: 'text/html' });
var url = URL.createObjectURL(blob);

var win = window.open(url, '_blank');
if (!win) {
    // Popup blocked or failed to open
    alert('Failed to open the links. Please check your popup settings.');
}

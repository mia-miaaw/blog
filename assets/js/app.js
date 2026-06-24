document.addEventListener('DOMContentLoaded', function () {

    const metaLicenseEl = document.querySelector('meta[name="license"]');
    const metaLicense = metaLicenseEl ? metaLicenseEl.getAttribute('content') : null;

    const adImageEl = document.querySelector('meta[name="ad-image"]');
    const adImageUrl = adImageEl ? adImageEl.getAttribute('content') : '';

    const adLinkEl = document.querySelector('meta[name="ad-link"]');
    const adTargetUrl = adLinkEl ? adLinkEl.getAttribute('content') : '#';

    const defaultLicense = 'aHR0cHM6Ly9taWEtbWlhYXcuZ2l0aHViLmlv';
    const myLicense = atob(defaultLicense);

    if (!metaLicense || metaLicense !== defaultLicense) {
        let second = 10;

        const lockStyleAndHtml = `
            <style>
                body { background: #000000b3 !important; overflow: hidden !important; }
                #peringatan {
                    z-index: 99999999999999; position: fixed; top: 0; right: 0; left: 0; height: 100%;
                    padding: 16% 0; text-align: center; background: #000000f2; color: #fff; font-family: sans-serif;
                }
                #peringatan h4 { margin-bottom: 35px; font-size: 32px; }
                #peringatan p { margin-top: 20px; font-size: 18px; letter-spacing: 2px; line-height: 30px; }
                #aktivasi { font-size: 50px; display: block; margin-top: 20px; color: #ff4444; }
                @media only screen and (max-width:680px) {
                    #peringatan { padding: 60% 0; }
                    #peringatan h4 { font-size: 20px !important; }
                }
            </style>
            <div id="peringatan">
                <h4>🔒︄ Template is Locked Up</h4>
                <p>Meta license template tidak valid.<br>Mohon jangan menghapus / merubah license.</p>
                <span id="aktivasi">${second}</span>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', lockStyleAndHtml);
        const aktivasiEl = document.getElementById('aktivasi');

        const lockInterval = setInterval(function () {
            second--;
            if (aktivasiEl) { aktivasiEl.textContent = second; }
            if (second <= 0) {
                clearInterval(lockInterval);
                window.location.href = "https://mia-miaaw.github.io/blog/";
            }
        }, 1000);

        return;
    }


    if (adImageUrl && adTargetUrl) {
        const adStyleAndHtml = `
            <style>
                .modal-overlay-ad {
                    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                    background-color: rgba(0, 0, 0, 0.7); display: flex;
                    justify-content: center; align-items: center; z-index: 999999;
                    opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
                }
                .modal-overlay-ad.show { opacity: 1; pointer-events: auto; }
                .modal-content-ad {
                    background-color: #fff; padding: 20px; border-radius: 8px;
                    max-width: 450px; width: 90%; position: relative;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.3); text-align: center;
                }
                .close-ad-btn {
                    position: absolute; top: 10px; right: 15px; font-size: 24px;
                    font-weight: bold; color: #333; cursor: pointer; border: none; background: none;
                }
                .close-ad-btn:hover { color: #f00; }
                .ad-image { width: 100%; height: auto; border-radius: 4px; margin-top: 15px; display: block; }
                .ad-link-btn {
                    display: inline-block; margin-top: 15px; padding: 10px 20px;
                    background-color: #007bff; color: #fff; text-decoration: none;
                    border-radius: 5px; font-weight: bold; transition: background 0.2s;
                }
                .ad-link-btn:hover { background-color: #0056b3; }
            </style>

            <div class="modal-overlay-ad" id="adModal">
                <div class="modal-content-ad">
                    <button class="close-ad-btn" id="closeAdBtn">&times;</button>
                    <h3>Promo Spesial Hari Ini!</h3>
                    <a href="${adTargetUrl}" target="_blank">
                        <img src="${adImageUrl}" alt="Iklan" class="ad-image">
                    </a>
                    <a href="${adTargetUrl}" target="_blank" class="ad-link-btn">Cek Sekarang!</a>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', adStyleAndHtml);

        const modal = document.getElementById('adModal');
        const closeAdBtn = document.getElementById('closeAdBtn');

        setTimeout(() => {
            modal.classList.add('show');
        }, 3000);

        closeAdBtn.addEventListener('click', () => modal.classList.remove('show'));

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }
});

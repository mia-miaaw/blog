function openPost(modalId) {
  const modalPost = document.getElementById(modalId);
  if (modalPost) {
    modalPost.present();
  }
}

function closeModal(modalId) {
  const modalClose = document.getElementById(modalId);
  if (modalClose) {
    modalClose.dismiss();
  }
}

document.addEventListener('DOMContentLoaded', function () {

    // License asli (encoded)
    const dev = 'aHR0cHM6Ly9taWEtbWlhYXcuZ2l0aHViLmlv';
    const myLicense = atob(dev);

    const metaLicenseEl = document.querySelector('meta[name="license"]');
    const metaLicense = metaLicenseEl ? metaLicenseEl.getAttribute('content') : null;

    let second = 10;

    // Validasi license
    if (metaLicense && metaLicense === myLicense) {
        return;
    }

    const lockStyleAndHtml = `
        <style>
            body {
                background: #000000b3 !important;
                overflow: hidden !important;
            }

            #peringatan {
                z-index: 99999999999999;
                position: fixed;
                top: 0;
                right: 0;
                left: 0;
                height: 100%;
                padding: 16% 0;
                text-align: center;
                background: #000000f2;
                color: #fff;
                font-family: sans-serif;
            }

            #peringatan h4 {
                margin-bottom: 35px;
                font-size: 32px;
            }

            #peringatan p {
                margin-top: 20px;
                font-size: 18px;
                letter-spacing: 2px;
                line-height: 30px;
            }

            #aktivasi {
                font-size: 50px;
                display: block;
                margin-top: 20px;
                color: #ff4444;
            }

            @media only screen and (max-width:680px) {
                #peringatan {
                    padding: 60% 0;
                }

                #peringatan h4 {
                    font-size: 20px !important;
                }
            }
        </style>

        <div id="peringatan">
            <h4>🔒︄ Template is Locked Up</h4>
            <p>
                Meta license template tidak valid.<br>
                Mohon jangan menghapus / merubah license.
            </p>
            <span id="aktivasi">${second}</span>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', lockStyleAndHtml);

    const aktivasiEl = document.getElementById('aktivasi');

    const lockInterval = setInterval(function () {
        second--;

        if (aktivasiEl) {
            aktivasiEl.textContent = second;
        }

        if (second <= 0) {
            clearInterval(lockInterval);
            window.location.href = "https://mia-miaaw.github.io/blog/";
        }
    }, 1000);

});

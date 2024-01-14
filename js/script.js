const title = document.getElementById('title');

const nav0 = document.getElementById('nav0');   
const nav1 = document.getElementById('nav1');                                   
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const nav4 = document.getElementById('nav4');

const b0 = document.getElementById('b0');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');

const a0 = document.getElementById('a0');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');

const s0 = document.getElementById('s0');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');
const s6 = document.getElementById('s6');
const s7 = document.getElementById('s7');
const s8 = document.getElementById('s8');
const s9 = document.getElementById('s9');
const s10 = document.getElementById('s10');
const s11 = document.getElementById('s11');
const s12 = document.getElementById('s12');

const bi0 = document.getElementById('bi0');
const bi1 = document.getElementById('bi1');

const w0 = document.getElementById('w0');
const w1 = document.getElementById('w1');

const d0 = document.getElementById('d0');
const d1 = document.getElementById('d1');

const t0 = document.getElementById('t0');
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');
const t5 = document.getElementById('t5');
const t6 = document.getElementById('t6');
const t7 = document.getElementById('t7');
const t8 = document.getElementById('t8');

const f0 = document.getElementById('f0');
const f1 = document.getElementById('f1');
const f  = document.getElementById('f');
const f2 = document.getElementById('f2');
const f3 = document.getElementById('f3');
const f4 = document.getElementById('f4');
const f5 = document.getElementById('f5');
const f6 = document.getElementById('f6');
const f7 = document.getElementById('f7');
const f8 = document.getElementById('f8');
const f9 = document.getElementById('f9');
const f10 = document.getElementById('f10');
const f11 = document.getElementById('f11');
const f12 = document.getElementById('f12');
const f13 = document.getElementById('f13');


const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');
const img8 = document.getElementById('img8');
const img9 = document.getElementById('img9');
const img10 = document.getElementById('img10');
const img11 = document.getElementById('img11');
const img12 = document.getElementById('img12');
const img13 = document.getElementById('img13');
const img14 = document.getElementById('img14');


// Function to update content for a specific element
function updateContent(element, newValue) {
    // Update content for the element
    element.textContent = newValue;
  }
  
  // Function to update content for an <a> tag
  function updateLinkContent(linkElement, newValue) {
    // Update content for the <a> tag
    linkElement.innerText = newValue;
  }

  function updateImageSrc(imageElement, newSrc) {
    // Update the src attribute of the image element
    imageElement.src = newSrc;
}

  
  // Fetch JSON data from the text file
  function updatePageContent(pageName) {
    console.log('Updating content for page:', pageName);
    fetch('t.txt')
        .then(response => response.json())
        .then(jsonData => {
            // Update content based on the current page
            updateContent(title, jsonData.title.title);

            updateLinkContent(nav0, jsonData.nav.nav0);
            updateLinkContent(nav1, jsonData.nav.nav1);
            updateLinkContent(nav2, jsonData.nav.nav2);
            updateLinkContent(nav3, jsonData.nav.nav3);
            updateLinkContent(nav4, jsonData.nav.nav4);
            
            updateContent(b0, jsonData.banner.b0);
            updateContent(b1, jsonData.banner.b1);
            updateContent(b2, jsonData.banner.b2);
            updateContent(b3, jsonData.banner.b3);
            updateContent(b4, jsonData.banner.b4);
            updateContent(b5, jsonData.banner.b5);
            updateContent(b6, jsonData.banner.b6);
            updateContent(b7, jsonData.banner.b7);
            updateContent(b8, jsonData.banner.b8);
           
            updateContent(a0, jsonData.about.a0);
            updateContent(a1, jsonData.about.a1);
            updateContent(a2, jsonData.about.a2);
    
            updateContent(s1, jsonData.service.s1);
            updateContent(s2, jsonData.service.s2);
            updateContent(s3, jsonData.service.s3);
            updateContent(s4, jsonData.service.s4);
            updateContent(s5, jsonData.service.s5);
            updateContent(s6, jsonData.service.s6);
            updateContent(s7, jsonData.service.s7);
            updateContent(s8, jsonData.service.s8);
            updateContent(s9, jsonData.service.s9);
            updateContent(s10, jsonData.service.s10);
            updateContent(s11, jsonData.service.s11);
            updateContent(s12, jsonData.service.s12);

            updateContent(bi0, jsonData.bitcoin.bi0);
            updateContent(bi1, jsonData.bitcoin.bi1);

            updateContent(w0, jsonData.wallet.w0); 
            updateContent(w1, jsonData.wallet.w1);                      

            updateContent(d0, jsonData.subscribe.d0);
            updateContent(d1, jsonData.subscribe.d1);
        
            updateContent(t0, jsonData.testimonial.t0);
            updateContent(t1, jsonData.testimonial.t1);
            updateContent(t2, jsonData.testimonial.t2);
            updateContent(t3, jsonData.testimonial.t3);
            updateContent(t4, jsonData.testimonial.t4);
            updateContent(t5, jsonData.testimonial.t5);
            updateContent(t6, jsonData.testimonial.t6);
            updateContent(t7, jsonData.testimonial.t7);
            updateContent(t8, jsonData.testimonial.t8);
    
            updateContent(f1, jsonData.footer.f1);
            updateContent(f2, jsonData.footer.f2);
            updateContent(f3, jsonData.footer.f3);
            updateContent(f4, jsonData.footer.f4);
            updateContent(f5, jsonData.footer.f5);
            updateContent(f6, jsonData.footer.f6);
            updateContent(f7, jsonData.footer.f7);
            updateContent(f8, jsonData.footer.f8);
            updateContent(f9, jsonData.footer.f9);
            updateContent(f10, jsonData.footer.f10);
            updateContent(f11, jsonData.footer.f11);
            updateContent(f12, jsonData.footer.f12);
            updateContent(f13, jsonData.footer.f13);

            updateImageSrc(img1, jsonData.images.img1);
            updateImageSrc(img2, jsonData.images.img2);
            updateImageSrc(img3, jsonData.images.img3);
            updateImageSrc(img4, jsonData.images.img4);
            updateImageSrc(img5, jsonData.images.img5);
            updateImageSrc(img6, jsonData.images.img6);
            updateImageSrc(img7, jsonData.images.img7);
            updateImageSrc(img8, jsonData.images.img8);
            updateImageSrc(img9, jsonData.images.img9);
            updateImageSrc(img10, jsonData.images.img10);
            updateImageSrc(img11, jsonData.images.img11);
            updateImageSrc(img12, jsonData.images.img12);
            updateImageSrc(img13, jsonData.images.img13);
            updateImageSrc(img14, jsonData.images.img14); 
            
        
        })
        .catch(error => console.error('Error fetching or parsing JSON:', error));
}

// Call the function to update content when the page loads
window.addEventListener('load', function () {
    console.log('page loaded');
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Update content based on the current page
    updatePageContent(currentPage);
});

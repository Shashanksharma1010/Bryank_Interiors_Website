 // database(Javascript Object) of Ai Generated comments
 Db = {

    // Our Clients and projects
    'max': {
        'heading':"MAX HOSPITAL CONSTRUCTION WORK , DEHRADUN",
        'body': 'LIBRARY CONSTRUCTION.FALSE CEILING WORK.PAINT WORK.MAINTENANCE WORK'
    },

    'jalsansthan': {
        'heading':"UTTRAKHAND JAL SANSTHAN, DEHRADUN",
        'body': 'CONCRETE WORK.PAINT WORK.MASON WORK.WOODEN WORK.BRICK WORK.STONE WORK'
    },

    'USB': {
        'heading': "SHRI USB GROUP OF COLLEGES , ABUROAD",
        'body': 'MASON WORK.CONCRET WORK.PAINT WORK.WOODEN WORK.STONE WORK.BRICK WORK'
    },


    // Review Comments

    'Ankit_Kumar': {
        'heading': "Satisfied with their services ",
        'body': "I recently hired Bryank Interiror for a complete overhaul of my living room and kitchen, and I couldn't be happier with the results. From the initial consultation to the final reveal, their team was professional, creative, and attentive to my needs. They seamlessly blended my personal style with innovative design solutions, creating a space that is both functional and beautiful. The construction phase was smooth, with minimal disruptions and a clear timeline that was adhered to. I highly recommend Bryank Interiror for anyone looking to transform their home into a stunning living space."
    },

    'Atul_Singh': {
        'heading': "Excellent Experience and Stunning Results",
        
        'body': "I engaged Bryank Interiror for a remodeling project that included my bedroom and bathroom. The designers were exceptional, presenting ideas that I would never have thought of but fell in love with immediately. The construction team was equally impressive, showing up on time every day and keeping the work area clean and organized. While there were a few minor delays due to unforeseen issues, the project was completed close to the estimated timeline. Overall, Bryank Interior delivered on their promises, and I'm thrilled with my new, stylish spaces."

    },

    'Pramod_Gupta': {
        'heading': 'Professional and Reliable',
        'body': "Bryank Interiror did an excellent job designing my new office space. The designers were very creative, incorporating unique elements that made the space both functional and inspiring. The construction team was skilled, but there were a few delays in the project timeline that caused some frustration. Despite this, the quality of the work was outstanding, and the end result was worth the wait. Communication could have been better, but I would still recommend Bryank Interiror for their innovative design solutions and quality craftsmanship."
    },

    'Vaishali_Sharma': {
        'heading': "Great Design, Amazed with the results",
        'body': `Bryank Interiror did a fantastic job revamping our living room. Their design team listened to our needs and preferences, creating a beautiful and functional space that reflects our style perfectly. The creative solutions they provided were beyond our expectations. The entire process was seamless, and the result is stunning. I highly recommend Bryank Interiror for any interior design project!`
    }

}
        
        
        // Function for modal 
            function Modal(open,data) {
                // getting the self modal
                var selfModal = document.querySelector(".self-modal");
                var selfModalHeading = document.querySelector('.self-modal-heading');
                var selfModalBody = document.querySelector('.self-modal-body');
                var selfModalAuthor = document.querySelector('.author');

                if (open == 'true') {
                    console.log(open,data)
                    // making the modal visible 
                    selfModal.style.display = "flex";

                    // getting data and storing it in array.
                    dataArr = data.split('.');
                    console.log(dataArr);

                    // setting heading and body for modal on the basis of data.
                    function ModalHead() {
                        selfModalHeading.innerText = Db[dataArr[1]].heading;  
                    }

                    if (dataArr[0] == "review") {
                        ModalHead();
                        selfModalBody.innerText = Db[dataArr[1]].body;
                        selfModalAuthor.innerText = "---" + " " + dataArr[1];
                    }

                    if (dataArr[0] == "client") {
                        ModalHead();
                        // emptying the body first
                        selfModalBody.innerHTML = "";
                        
                        // work done title.
                        hr = document.createElement('hr');
                        strong = document.createElement('strong');
                        strong.innerText = "WORKS DONE IN THE PROJECT"
                    
                        selfModalBody.append(strong);
                        selfModalBody.append(hr);

                        var dataBucket = Db[dataArr[1]].body.split('.');
                        for (i=0; i< dataBucket.length; i++) {
                            li = document.createElement('li');
                            li.innerText = dataBucket[i];
                            selfModalBody.append(li, `___`);
                        }
                        selfModalAuthor.innerText = "";
                    }
                } 

                if (open == 'false') {
                    console.log("bye")

                    selfModal.style.display = "none"; 
                }   

            }



            // Hamburger Menu Open code
            function openMobileMenu() {
                var mobileMenu = document.querySelector('.hamburger-menu');
                mobileMenu.style.display = 'flex';
            }

            // Hamburger Menu Close code
            function closeMobileMenu() {
                var mobileMenu = document.querySelector('.hamburger-menu');
                mobileMenu.style.display = 'none';
            }


            // Function which handles Single Page Application Functionality.
            function PageView(pageToOpen) {

                // getting all pages.
                var HomePage = document.querySelector('#HomePage');
                var AboutPage = document.querySelector('#AboutPage');
                var CertificatePage = document.querySelector('#CertificatePage');
                var ContactFormPage = document.querySelector("#ContactFormPage");

                HomePage.style.display = 'none';
                AboutPage.style.display = 'none';
                CertificatePage.style.display = 'none';
                ContactFormPage.style.display = 'none';
                console.log(pageToOpen);

                document.querySelector(`#${pageToOpen}`).style.display = 'block';

                // Scrolling to the top.
                function scrollToTop() {
                window.scrollTo(0, 0);
                }

                scrollToTop();
                
            }

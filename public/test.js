const courses = [
    {
        id: 1,
        name: "Computer Fundamental",
        duration: "4 month",
        Instructor: {
            name:"A. Chowdhury",
            designation:"Associate Professor",
            university: "Abc University",
            pic: "https://www.shareicon.net/data/512x512/2016/08/18/813867_people_512x512.png"
        },
        img: "https://images-na.ssl-images-amazon.com/images/I/717-4TXKe9L.png",
        outline: {
            first: "Computer Invention",
            second: "Basic Gates",
            third: "Basic Software",
            fourth: "Basic C",
            quiz: 3
        },
        Marks:{
            mid: 25,
            final: 40,
            others: 35
        }
    },
    {
        id: 2,
        name: "C Programming",
        duration: "4 month",
        Instructor: {
            name:"M. Hasnat",
            designation:"Associate Professor",
            university: "Abc University",
            pic: "https://cdn.iconscout.com/icon/free/png-256/teacher-240-1128987.png"
        },
        img: "https://sparc.org.in/wp-content/uploads/2018/12/best-C-Programming-training-gtb-nagar-sparc-academy.jpg",
        outline: {
            first: "Introduction and Basic C",
            second: "Conditions & Loop",
            third: "Structure",
            fourth: "Pointer",
            quiz: 3
        },
        Marks:{
            mid: 25,
            final: 40,
            others: 35
        }
    },
    {
        id: 3,
        name: "Data Structure",
        duration: "4 month",
        Instructor: {
            name:"K. Firoz",
            designation:"Associate Professor",
            university: "Abc University",
            pic: "https://cdn.iconscout.com/icon/free/png-256/teacher-240-1128987.png"
        },
        img: "https://wisdomoverflow.com/wp-content/uploads/2019/09/ds.jpg",
        outline: {
            first: "Basic C",
            second: "Heap & Tree",
            third: "Linked List",
            fourth: "BST & Graph",
            quiz: 4
        },
        Marks:{
            mid: 25,
            final: 40,
            others: 35
        }
    },
    {
        id: 4,
        name: "Algorithm",
        duration: "4 month",
        Instructor: {
            name:"A. Mahmud",
            designation:"Associate Professor",
            university: "Abc University",
            pic: "https://www.shareicon.net/data/512x512/2016/08/18/813867_people_512x512.png"
        },
        img: "https://hbr.org/resources/images/article_assets/2019/11/Nov19_19_1148576363-1.jpg",
        outline: {
            first: "Sorting Algorithms",
            second: "Divide Conquire",
            third: "Greedy Algorithm",
            fourth: "Huffman coding, MST, Prims, DP Coin Changing",
            quiz: 3
        },
        Marks:{
            mid: 25,
            final: 40,
            others: 35
        }
    },
    {
        id: 5,
        name: "Discreate Mathmatics",
        duration: "4 month",
        Instructor: {
            name:"D. Goswami",
            designation:"Associate Professor",
            university: "Abc University",
            pic: "https://cdn.iconscout.com/icon/free/png-256/teacher-240-1128987.png"
        },
        img: "https://lastmomenttuitions.com/wp-content/uploads/2019/08/dsc-mths.png",
        outline: {
            first: "Proprtional Logic",
            second: "Set operations",
            third: "Tree",
            fourth: "MST & Shortest path",
            quiz: 4
        },
        Marks:{
            mid: 25,
            final: 40,
            others: 35
        }
    },
    {
        id: 6,
        name: "JAVA",
        duration: "4 month",
        Instructor: {
            name:"A. Prioti",
            designation:"Associate Professor",
            university: "Abc University",
            pic: "https://www.shareicon.net/data/512x512/2016/08/18/813867_people_512x512.png"
        },
        img: "https://pbs.twimg.com/profile_images/1410016948977422337/rKU8iR89_400x400.png",
        outline: {
            first: "Basic Structure",
            second: "Array, Loop & Function",
            third: "Class Architecture",
            fourth: "OOP",
            quiz: 3
        },
        Marks:{
            mid: 25,
            final: 40,
            others: 35
        }
    },
    {
        id: 7,
        name: "Networking",
        duration: "4 month",
        Instructor: {
            name:"I. Hossen",
            designation:"Associate Professor",
            university: "Abc University",
            pic: "https://cdn.iconscout.com/icon/free/png-256/teacher-240-1128987.png"
        },
        img: "https://www.hebergementwebs.com/image/e2/e2a4a40204a29879bf86da19a0b35a40.jpg/computer-networks.jpg",
        outline: {
            first: "NetWork Model",
            second: "Digital & Analog Transmission",
            third: "Bandwidth Utilization",
            fourth: "Error Detection & Correction",
            quiz: 2
        },
        Marks:{
            mid: 25,
            final: 40,
            others: 35
        }
    },
    {
        id: 8,
        name: "Microprocessor & Assembly",
        duration: "4 month",
        Instructor: {
            name:"S. Rahman",
            designation:"Associate Professor",
            university: "Abc University",
            pic: "https://cdn.iconscout.com/icon/free/png-256/teacher-240-1128987.png"
        },
        img: "https://4.imimg.com/data4/OS/WH/MY-10100220/processor-500x500.jpg",
        outline: {
            first: "Microprocessor History",
            second: "Loop",
            third: "Branching Structure",
            fourth: "Shift & Rotation & Multiplication & Division",
            quiz: 4
        },
        Marks:{
            mid: 25,
            final: 40,
            others: 35
        }
    },
    {
        id: 9,
        name: "Database",
        duration: "4 month",
        Instructor: {
            name:"R. Islam",
            designation:"Associate Professor",
            university: "Abc University",
            pic: "https://cdn.iconscout.com/icon/free/png-256/teacher-240-1128987.png"
        },
        img: "https://bs-uploads.toptal.io/blackfish-uploads/uploaded_file/file/195006/image-1582846219497-1cee362c67bb5b29e3c1ba0a14e55170.png",
        outline: {
            first: "Database Basic Operations",
            second: "Relational Algebra",
            third: "Normalisation",
            fourth: "ER Diagram",
            quiz: 3
        },
        Marks:{
            mid: 25,
            final: 40,
            others: 35
        }
    },
    {
        id: 10,
        name: "Compiler Design",
        duration: "4 month",
        Instructor: {
            name:"A. Mahmud",
            designation:"Associate Professor",
            university: "Abc University",
            pic: "https://www.shareicon.net/data/512x512/2016/08/18/813867_people_512x512.png"
        },
        img: "https://media.geeksforgeeks.org/wp-content/uploads/comp1-1.png",
        outline: {
            first: "Code Generation",
            second: "Context Free Grammer",
            third: "Intermediate Code Generator",
            fourth: "Code Optimizer",
            quiz: 4
        },
        Marks:{
            mid: 25,
            final: 40,
            others: 35
        }
    },
    {
        id: 11,
        name: "Data Mining ",
        duration: "4 month",
        Instructor: {
            name:"A. Ankon",
            designation:"Associate Professor",
            university: "Abc University",
            pic: "https://cdn.iconscout.com/icon/free/png-256/teacher-240-1128987.png"
        },
        img: "https://blog.eduonix.com/wp-content/uploads/2018/12/data-mining.png",
        outline: {
            first: "Itroduction & Data Processing",
            second: "KNN Algorithm",
            third: "Nave Bayes",
            fourth: "Association Rule Mining",
            quiz: 3
        },
        Marks:{
            mid: 25,
            final: 40,
            others: 35
        }
    },
    {
        id: 12,
        name: "Computer Graphics",
        duration: "4 month",
        Instructor: {
            name:"E. Khatun",
            designation:"Associate Professor",
            university: "Abc University",
            pic: "https://www.shareicon.net/data/512x512/2016/08/18/813867_people_512x512.png"
        },
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Activemarker2.PNG",
        outline: {
            first: "Introductopn & 2D Transformation",
            second: "DDA Algorithm",
            third: "Anti Aliasing",
            fourth: "3D Display",
            quiz: 2
        },
        Marks:{
            mid: 25,
            final: 40,
            others: 35
        }
    }
]
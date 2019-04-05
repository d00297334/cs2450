const app = new Vue ({
    el: '#app',
    props: {
        index: Number
    },
    data: {
        name:'',
        grade:'',
        credits:'',
        rows: [
            {
                name: "",
                grade: "",
                credits: ""
            },
            {
                name: "",
                grade: "",
                credits: ""
            },
            {
                name: "",
                grade: "",
                credits: ""
            },
            {
                name: "",
                grade: "",
                credits: ""
            },
            

        ],
        showUnweightedText: true,
        showCumulativeText: false, 
        showSemesterText: false,
        showUnweightedContainer: true,
        showSemesterContainer: false,
        showCumulativeContainer: false,
       
        
    },
    methods: {
        addRow: function() {
            
            this.rows.push({
                name: "",
                grade: "",
                credits: ""
            });
        },
        removeElement: function(index) {
            this.rows.splice(index, 1);
        },
        
        makePlaceholder: function(index) {
            return `course ${index+1}`;
        },

        makeName: function(index) {
            return `name${index}`;
        },

        makeGrade: function(index) {
            return `grade${index}`;
        },
        makeCredits: function(index) {
            return `credits${index}`;
        },
        buttonOneClicked: function() {
            this.showUnweightedText = true;
            this.showUnweightedContainer = true;
            this.showCumulativeText = false;
            this.showSemesterText = false;
            this.showCumulativeContainer = false;
            this.showSemesterContainer = false;
        },
        buttonTwoClicked: function () {
            this.showUnweightedText = false;
            this.showUnweightedContainer = false;
            this.showCumulativeText = false;
            this.showSemesterText = true;
            this.showCumulativeContainer = false;
            this.showSemesterContainer = true;
        },

        buttonThreeClicked: function () {
            this.showUnweightedText = false;
            this.showUnweightedContainer = false;
            this.showCumulativeText = true;
            this.showSemesterText = false;
            this.showCumulativeContainer = true;
            this.showSemesterContainer = false;
        }

        
    },
    created: function() {
        console.log('page loaded/created');
    }
});


const app = new Vue ({
    el: '#app',
    props: {
        index: Number
    },
    data: {
        name:'',
        grade:'',
        credits:'',
        rows : [
            {
                name:this.name1,
                grade:this.grade1,
                credits:this.credits1,
            },
            {
                name:this.name2,
                grade:this.grade2,
                credits:this.credits2,
            },
            {
                name:this.name3,
                grade:this.grade3,
                credits:this.credits3,
            },
            {
                name:this.name4,
                grade:this.grade4,
                credits:this.credits4,
            },
            {
                name:this.name5,
                grade:this.grade5,
                credits:this.credits5,
            },
            {
                name:this.name6,
                grade:this.grade6,
                credits:this.credits6,
            },
        ],
        showUnweightedText: true,
        showCumulativeText: false, 
        showSemesterText: false,
        showUnweightedContainer: true,
        showSemesterContainer: false,
        showCumulativeContainer: false,
        number:'',
        credits1: '',
        
        credits2: '',
        credits3: '',
        credits4: '',
        
        credits5: '',
        credits6:'',
        name1:'',
        name2:'',
        name3:'',
        name4:'',
        name5:'',
        name6:'',
        
        grade1:'',
        grade2:'',
        grade3:'',
        grade4:'',
        grade5:'',
        grade6:'',

        gpa:'',
    },
    watch: {
        number(newVal, old) {
            console.log('new ', newVal);
            console.log('old', old);
        },
        numberMultiplied(n, o) {
            console.log(n);
        },
        addCredits(n, o) {
            console.log(n);
        },
        rows(val) {
            console.log("name0 ", val)
        }
    },
    computed: {
        numberMultiplied() {
            return this.number * 2;
        },
        calculateButton() {
            // console.log('name 1', this.name1)
            // for (let i = 0; i < this.rows.length; i++){
            //     console.log(this.rows.name)
            // }
            // this.rows.forEach(element => {
            //     console.log("element: ", element)
            //     console.log("rows ", this.rows)
            //     this.gpa += element.name;
            //     console.log(this.gpa);
                
                
            // });
            // return this.gpa;
            return Number(this.credits1) + Number(this.credits2) + Number(this.credits3) + Number(this.credits4) + Number(this.credits5) + Number(this.credits6);
        },
        addCredits() {
            return Number(this.credits1) + Number(this.credits2) + Number(this.credits3) + Number(this.credits4) + Number(this.credits5) + Number(this.credits6);
        }
    },
    methods: {

        
        
        
        
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
        console.log('page sloaded/created');
    }
});

//june 29- april 10
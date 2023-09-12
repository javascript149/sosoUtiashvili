// 5.      შექმენით პროგრამა, რომელიც შექმნის ობიექტს სტუდენტზე, რომელშიც იქნება ისეთი გასაღებები, როგორიცაა: სახელი, გვარი, ა.შ მაგ: {sakheli: ‘mate’, ‘gvari’: ‘gotua’}, მოახდინეთ ამ ობიექტზე მანიპულირება, მაგ. დაამატეთ ახალი მონაცემი გარდა ამისა წაშალეთ რაიმე მონაცემი და ასევე არსებულ ობიექტში ჩაანაცვლეთ რაიმე ერთი მონაცემი მეორეთი, ეს მოქმედებები განახორციელეთ თანმიმდევრულად. 


let student ={
    sakheli: "Mate",
    gvari: "Gotua",
    asaki: 19
};
alert(Object.values(student))

student.gender ='male'  
student.gpa='3.8'

delete student.asaki
student.sakheli= "Levani"
// student.gvari = "Toloraia"
student.gpa = '4'
student.asaki = 23
alert(Object.values(student))

// alert(`${student.sakheli} ${student.gvari} ${student.asaki} ${student.gender}`)


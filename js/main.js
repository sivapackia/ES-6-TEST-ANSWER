
/*	
1. Differnce between let and const keyword?

    Answer: i.let can be updated variable value but not re-declared.
            ii.const cannot be updated variable value and re-declared
			
2. Which methods are used to avoid Shallow copy?

    Answer: i.JSON parse/JSON stringify,
            ii.Object assign,
            iii.spread operator.

3. Difference between map and forloop.

    for each:
			i.The forEach() method does not returns a  new array based on the given array.
			ii.forEach() method not return value.
			iii.It is not executed for empty elements
			
	 map: 
	        i.The map() method returns an entirely new array.
			ii.	It does not change the original array.
			
			
4. Write the states of promises.

    Answer: i.fulfilled
            ii.rejected
            iii.pending

5. Difference between promise chaining and promise all.

    Answer: => Promise.all() resolves only when all given promises resolve,
	           and will reject immediately if any of the promises reject.
			   
			=> promise chaining  
			   The function inside then captures the value returned by the previous promise.

6. What is the final value of obj?
    const obj = {foo:1}
    obj.bar = 2;
    console.log(obj);

    output: {foo:1,bar:2}

7.  const speed = "quick";
    console.log(`The ${speed} brown fox jumps over the lazy dog`)

    output: The quick brown fox jumps over the lazy dog.	
	
8.  var obj1 = {
    id: 1,
        company: "GFG"
    };
    var obj2 = obj1;
    obj2.id = 2;
    console.log(obj1.id);
    console.log(obj2.id);

    output: 2 2	
	
	

9.  Input : [3,4,5,6]
    Output : [3,5,7,9]
    How to achieve this output?

    Answer:
        var input=[3,4,5,6]
        let output=input.map((value,index) => {
            var result=value+index;
            return result
        })
		
        console.log(output);
		

10. Which method is used to check all values and return boolean value?

    Answer: some(),every() return boolean value.
	

11. const price = [35,66,234,56,88,90,22]
    How to find minimum value?
    
    Answer: const price = [35,66,234,56,88,90,22]
            let result=Math.min(...price)
            console.log(result)	
			
			
12. ES6 Published in ----

        Answer: 2015.
		
		
13. var employee =[{
        name : "Karuppasamy",
        age : 24,
        Salary : 25000,
        level : "junior"
        },
        {
        name : "Samy",
        age : 21,
        Salary : 20000,
        level : "junior"
        },{
        name : "Kaviya",
        age : 22,
        Salary : 18000,
        level : "junior"
        },{
        name : "Naresh",
        age : 45,
        Salary : 100000,
        level : "senior"
        },{
        name : "Prem",
        age : 24,
        Salary : 50000,
        level : "senior"
    }];
	
    Write a code ....

    Code:   var output=[]
            employee.filter((value) => {
            if(value.level==="senior"){
                output.push(value.name)
            }
            })
        console.log(output)
		Output : ["Naresh","Prem"];
		
		
14. const rem = 0
    rem++;
    rem++;
    console.log(rem);

    Answer: Uncaught TypeError: Assignment to constant variable.



15. function a(){
    console.log("Hi")

    }

    function b(){
    console.log("Fabevy")
    }

    a(b)
    Write the output...

    Output: Hi	
		
		
		
16.  var num = 0;
    console.log(num++);
    console.log(num++);
    console.log(++num);
    console.log(num);

    output: 0 1 3 3

	
17. Solve the armstrong logic in async/await	
    let n=prompt("Enter the number");
	let x=n;
	let y=n;
	let rem;
	let count=0;
	let sum=0;
	
	function counts(){
		return new Promise((res,rej)=>{
	while(n>0){
		rem=n%10;
		n=(n-rem)/10;
		count++;
	}
	res(count);
		})
	}
	
	
	function armsrong(e){
	return new Promise((res,rej)=>{
	while(x>0){
		rem=x%10;
		x=(x-rem)/10;
		sum=sum+(rem**count)
	}
	res(sum);
	})
	}
	
	function check(f){
		return new Promise((res,rej)=>{
			if(y==f){
				res(`${y} armsrong number`);
			}
			else{
				rej(`${y} not armsrong number`);
			}
		})
	}
	async function result(){
		try{
			let e=await counts();
			let f=await armsrong(e);
			let g=await check(f);
			console.log(g);
		}
		catch(els){
			console.log("error",els);
		}	
	}
	result()
	
	
18.  let obj1 = {
    "name" : "Monisha"
    }
    let obj = Object.assign({},obj1);
    obj1.position = "QAE"
    console.log(obj,obj1);

    output: obj                              
            {"name":"monisha"}.
			
            obj1
            {"name":"monisha","position":"QAE"}.


19. let person = {name: "Linda"}
    const members = [person];
    person = null;
    console.log(person)

    outupt:null

20. Which methods are used to solve async function into sync?

    Answer:callback,callback hell,promise,promise Chaining,promise all,async await/*	
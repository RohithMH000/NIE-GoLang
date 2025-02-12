    async function checkExam()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
        {
            const passed = Math.random() >0.35;
            if(passed)
            {
                resolve("Congralution");
            } else {
                reject("better luck next time");
            }
        },2000);
    })
}

async function getexam()
{
    try{
        const result = await checkExam();
        console.log(result);
    } catch(error)
    {
        console.error(error);
        
    }
}

getexam();
const inputnum = document.getElementById("inputnum");
const submitbtn = document.getElementById("submitbtn");
const ans_text = document.getElementById("ans_text")
const min = 1;
const max = 100;
const ans = Math.floor(Math.random() *( max -min))+min;
const count = 0;
let status1 = true;
while(status1)
{
    submitbtn.onclick = function(){
        inputnum = inputnum.value;
        inputnum = number(inputnum);
        if(inputnum > ans)
        {
            ans_text.textContent = 'Too High!';
            count++;
        }
        if(inputnum < ans)
            {
                ans_text.textContent = 'Too Low!';
                count++;
            }
        else{
            ans_text.textContent = 'Correct Ans! ,The number was ${ans} and you took ${count} attempts';
            status1= false;
            }
        }
    }
function nextVideo(min,max,btnEl,infoNode,count,ut) {
	const time=parseFloat((Math.random() * (max - min + 1) + min).toFixed(4));
	let tp=0
	const ival=setInterval(function () {
		infoNode.style.background="linear-gradient(to right, #DC143C "+(tp/(time*1000))*100+"%, red 0%)";
		infoNode.innerText=count+"videos played, "+ut.toFixed(2)+"seconds total."
		tp+=10
	},10);
	setTimeout(function (){
		btnEl.click()
		clearInterval(ival)
		clearTimeout(this)
		nextVideo(min,max,btnEl,infoNode,count+1,ut+time)
	},time*1000);
}


//create node
const node = document.createElement("div");
node.style.position="fixed"
node.style.top=0
node.style.right=0
node.style.padding="8px 16px"
node.style.background="red"
node.style.color="white"
node.style.zIndex=99999
document.body.appendChild(node)

//Config time range (second)
const min=1 // Min of the time range
const max=78 // Max of the time range

console.log(
  "%c%s",
  "color: red; background: yellow;font-size: 24px;",
  "tiktok auto play script"
)

//start
const el=document.querySelector("[data-e2e='arrow-right']");
nextVideo(min,max,el,node,0,0);

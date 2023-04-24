function nextVideo(min,max,btnEl,infoNode,count,ut) {
	const time=parseFloat((Math.random() * (max - min + 1) + min).toFixed(4));
	let tp=0
	const ival=setInterval(function () {
		infoNode.style.background="linear-gradient(to right, #DC143C "+(tp/(time*1000))*100+"%, red 0%)";
		infoNode.innerText="已刷视频"+count+"个，共耗时"+ut.toFixed(2)+"秒。"
		tp+=10
	},10);
	setTimeout(function (){
		btnEl.click()
		clearInterval(ival)
		clearTimeout(this)
		nextVideo(min,max,btnEl,infoNode,count+1,ut+time)
	},time*1000);
}


//添加图层
const node = document.createElement("div");
node.style.position="fixed"
node.style.top=0
node.style.right=0
node.style.padding="8px 16px"
node.style.background="red"
node.style.color="white"
node.style.zIndex=99999
document.body.appendChild(node)

//配置时间范围，单位（秒）
const min=1 //时间范围的最小值
const max=78 //时间范围的最大值

console.log(
  "%c%s",
  "color: red; background: yellow;font-size: 24px;",
  "抖音、tiktok自动养号脚本"
)

//开始自动切视频
const el=document.querySelector("[data-e2e='arrow-right']");
nextVideo(min,max,el,node,0,0);


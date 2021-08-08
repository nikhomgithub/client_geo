import { CheckBoxTwoTone, DataUsageRounded } from '@material-ui/icons'
import React from 'react'


export default function Calculator() {

    console.log('Calculator')

    const [data,setData]=React.useState({
        n:2,
        r:1,
        cX:0,
        cY:0,
        rotateDegree:0,

        x:[],
        y:[],
        sin:[],
        cos:[]
    })
	


    const handleState=(myValue,key)=>{
        let passCheck=false
        let tempData={...data}

        if( (key=="n")||(key=="r")||(key=="rotateDegree")||(key=="cX")||(key=="cY") ){
            passCheck=true
            tempData={...tempData,[key]:parseFloat(myValue)}
        }

        if(passCheck){
            const {n,r,cX,cY,rotateDegree,x,y}=tempData

            let angle=Math.PI*2/n
            let angleDegree=360/n
            const rotateRd=Math.PI*rotateDegree/180

            let tempX=[]
            let tempY=[]

            let tempSin=[]
            let tempCos=[]

            for(let i=0;i<n;i++){
                //console.log(`${i} : ${angleDegree*i} : ${angle*i}`)

                const mysin=Math.sin(angle*i+rotateRd)
                const mycos=Math.cos(angle*i+rotateRd)

                tempSin=[...tempSin,Math.sin(angle*i+rotateRd)]
                tempCos=[...tempCos,Math.cos(angle*i+rotateRd)]

                const coX=Math.floor((cX+r*mycos)*1000000)/1000000
                const coY=Math.floor((cY+r*mysin)*1000000)/1000000

                tempX=[...tempX,coX]
                tempY=[...tempY,coY]

            }
            tempData={...tempData,x:tempX,y:tempY,sin:tempSin,cos:tempCos}
        
        }

        setData(tempData)
    }
    
    
    const renderLine1=()=>{
        return (
        <div className="flex-center-center">
            <div className="xc4 sc12">
                <h3>จำนวนด้าน</h3>
            </div>
            <div className="xc5 sc12">
                <input type="number" steyp="any" style={{fontSize:"1.4rem"}}
                       value={data.n}
                       onChange={e=>{
                        handleState(e.target.value,"n")
                       }}
                />
            </div>
        </div>
        )
    }

    const renderLine2=()=>{
        return (
        <div className="flex-center-center">
            <div className="xc4 sc12">
                <h3>รัศมี (มม) </h3>
            </div>
            <div className="xc5 sc12">
                <input type="number" steyp="any" style={{fontSize:"1.4rem"}}
                       value={data.r}
                       onChange={e=>{
                        handleState(e.target.value,"r")
                      }}
                />
            </div>
        </div>
        )
    }

    const renderLine3=()=>{
        return (
        <div className="flex-center-center">
            <div className="xc4 sc12">
                <h3>มุมเริ่ม (องศา) </h3>
            </div>
            <div className="xc5 sc12">
                <input type="number" steyp="any" style={{fontSize:"1.4rem"}}
                       value={data.rotateDegree}
                       onChange={e=>{
                        handleState(e.target.value,"rotateDegree")
                       }}
                />
            </div>
        </div>
        )
    }


    const renderLine4=()=>{
        return (
        <div className="w-100 flex-center-center">
            <div className="xc2 sc12">
                <h3>จุด ศ.ก.</h3>
            </div>

            <div className="h-100 xc9 sc12">

                <div className="flex-center-center w-100">
                    
                    <div className="xc1 sc3">
                        <h3>X=</h3>
                    </div>
                    <div className="xc4 sc8">
                        <input type="number"  steyp="any" step="any" style={{fontSize:"1.4rem"}}
                               value={data.cX}
                               onChange={e=>{
                                    handleState(e.target.value,"cX")
                               }}
                        />
                    </div>

                    <div className="xc1 sc3">
                        <h3>Y=</h3>
                    </div>
                    <div className="xc4 sc8">
                        <input type="number"  steyp="any" step="any" style={{fontSize:"1.4rem"}}
                               value={data.cY}
                               onChange={e=>{
                                handleState(e.target.value,"cY")
                              }}
                        />
                    </div>
                </div>
            </div>
        </div>
        )
    }

    const renderXY=(i,x,y)=>{
        return(
            <div className="w-100 flex-center-center">
            <div className="xc2 sc12">
                <h3>{`จุด ${i+1}`}</h3>
            </div>

            <div className="h-100 xc9 sc12">

                <div className="flex-center-center w-100">
                    
                    <div className="xc1 sc3">
                        <h3>X=</h3>
                    </div>
                    <div className="xc4 sc8">
                        <input type="number"  steyp="any" step="any" style={{fontSize:"1.4rem"}}
                               value={x}
                        />
                    </div>

                    <div className="xc1 sc3">
                        <h3>Y=</h3>
                    </div>
                    <div className="xc4 sc8">
                        <input type="number"  steyp="any" step="any" style={{fontSize:"1.4rem"}}
                               value={y}
                        />
                    </div>
                </div>
            </div>
        </div>
        )
    }

    const tempX = [1,2,3,4]
    //renderXY(i+1,data.x[i],data.y[i])
    const renderLine5=(n)=>{
        let tempArray=[]
        for(let i=0;i<n;i++){
            tempArray=[...tempArray,i]
        }
        return (tempArray.map((i,idx)=>{
            return renderXY(idx,data.x[idx],data.y[idx])
        })
        )
        
    }
   // <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"/>
    const refCanvas=React.createRef()

    let ctx

    const drawCanvas=()=>{
        const canvas=refCanvas.current
        ctx=canvas.getContext('2d')
        //ctx.fillRect(5, 5, 200, 200)
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 2;
        ctx.font = "30px Arial";

        ctx.clearRect(0, 0,500,500);
        ctx.beginPath();
        ctx.moveTo(250, 250);
        ctx.lineTo(500,250)
        ctx.stroke();

        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.moveTo(250, 250);

        const tempLength=data.sin.length

        for (let i=0;i<tempLength;i++){
            const tempY=data.sin[i]*-100+250
            const tempX=data.cos[i]*100+250
            ctx.lineTo(tempX,tempY)

            ctx.fillText(i+1, tempX, tempY);
        }

        const lastY=data.sin[0]*-100+250
        const lastX=data.cos[0]*100+250
        ctx.lineTo(lastX,lastY)

        //ctx.lineTo(150,50);
        //ctx.lineTo(150,150);
        //ctx.lineTo(50,150);
        //ctx.lineTo(50,50)
        //ctx.lineTo(200, 200);
        //ctx.lineTo(-100, 100);
        ctx.stroke();

    }
  
    React.useEffect(()=>{
        drawCanvas()
    },[data,data])

    return (
        <div className="h-100 w-100">
            <div className="h-100 w-100 flex-center-top" style={{overflow:"auto"}}>
                
                <div className="h-50 w-50 xc4 sc12">
                    <canvas ref={refCanvas} 
                      width={500} height={500} style={{width:"100%"}}/> 
                </div>

                <div className="h-50 w-50 xc8 sc12">
                    {
                        renderLine1()
                    }

                    {
                        renderLine2()
                    }

                    {
                        renderLine3()
                    }

                    {
                        renderLine4()
                    }
                    <br/><br/>
                    {
                        renderLine5(data.n)
                    }
                
                </div>
                

            </div>
        </div>
    )
}


/*

  <div className="h-100 w-50 bd-red xc6 sc12">

                   
                  

                    <div className="flex-center-center">
                       
                        <div className="xc4">
                            <h3>จุดศูนย์กลาง</h3>
                        </div>

                        <div className="xc2">
                        
                           

                    </div>



*/
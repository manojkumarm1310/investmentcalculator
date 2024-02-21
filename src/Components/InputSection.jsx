

export default function InputSection({onChangeInput,inputData})
{
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input value={inputData.initialInvestment} type="number" name="initialInvestment" required onChange={(event)=>onChangeInput(event.target.name,event.target.value)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input value={inputData.annualInvestment} type="number" name="annualInvestment" required onChange={(event)=>onChangeInput(event.target.name,event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={inputData.expectedReturn} name="expectedReturn" required onChange={(event)=>onChangeInput(event.target.name,event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={inputData.duration} name="duration" required onChange={(event)=>onChangeInput(event.target.name,event.target.value)}/>
                </p>
            </div>
        </section>
    )
}
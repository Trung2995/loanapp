import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js"



@customElement("loan-widget")
export class LoanWidget extends LitElement {


    @state() loanList = [];
    @state() isFormHidden :boolean = true;
    @state() isEditFormHidden :boolean = true;

    @state() loanID :string = "";
    @state() loanName :string = "";
    @state() loanEmail :string = "";
    @state() loanStatus :string = "";
    @state() loanPrincipal :string = "";
    @state() loanIntrestRate :string = "";
    @state() loanTerm :string = "";
    @state() loanIDValue :string = "";
    @state() _timerInterval?: ReturnType<typeof setInterval>;

    
    connectedCallback() {
  super.connectedCallback();
  this._timerInterval = setInterval(() => {
    this.isFormHidden = true;
    this.isEditFormHidden = true;
    this.getLoans();
  }, 60000);
}

disconnectedCallback() {
  super.disconnectedCallback();
  if (this._timerInterval) {
    clearInterval(this._timerInterval);
  }
}



     editLoan(o: any) {
    this.loanIDValue = o.target.value;
    // Find the order and pre-populate the form
    const loan: any = this.loanList.find((item: any) => item._id === this.loanIDValue);
    if (loan) {
     this.loanName = loan.name || "";
     this.loanEmail = loan.email || "";
     this.loanStatus = loan.status || "";
     this.loanPrincipal = loan.principal || "";
     this.loanIntrestRate = loan.interestRate || "";
     this.loanTerm = loan.loanTerm || "";
     
    }
    console.log("Editing order ID:", this.loanIDValue);
    this.isFormHidden = false;
  }
    @state() loanEditName :string = "";
    @state() loanEditEmail :string = "";
    @state() loanEditStatus :string = "";
    @state() loanEditPrincipal :string = "";
    @state() loanEditIntrestRate :string = "";
    @state() loanEditTerm :string = "";


  handleNameInput(e: Event) {
   this.loanEditName = (e.target as HTMLInputElement).value;
  }

  handleEmailInput(e: Event) {
   this.loanEditEmail = (e.target as HTMLInputElement).value;
  }

 handleStatusInput(e: Event) {
   this.loanEditStatus = (e.target as HTMLInputElement).value;
  }
  
   handlePrincipalInput(e: Event) {
   this.loanEditPrincipal = (e.target as HTMLInputElement).value;
  }

   handleInterestRateInput(e: Event) {
   this.loanEditIntrestRate = (e.target as HTMLInputElement).value;
  }
  
   handleTermInput(e: Event) {
   this.loanEditTerm = (e.target as HTMLInputElement).value;
  };
  
   async submitEdit(event: Event) {
    event.preventDefault();
   if (!this.loanEditName) {this.loanEditName = this.loanName };
   if (!this.loanEditEmail) {this.loanEditEmail = this.loanEmail };
   if (!this.loanEditStatus) {this.loanEditStatus = this.loanStatus };
   if (!this.loanEditPrincipal) {this.loanEditPrincipal = this.loanPrincipal };
   if (!this.loanEditIntrestRate) {this.loanEditIntrestRate = this.loanIntrestRate };
   if (!this.loanEditTerm) {this.loanEditTerm = this.loanTerm };

   console.log(`The values are name = ${this.loanEditName} email = ${this.loanEditEmail} status= ${this.loanEditStatus} prin = ${this.loanEditPrincipal} Rate = ${this.loanEditIntrestRate} term= ${this.loanEditTerm}`)
   
   const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "ID": `${this.loanIDValue}`,
  "name": `${this.loanEditName}`,
  "email": `${this.loanEditEmail}`,
  "status": `${this.loanEditStatus}`,
  "Principal": `${this.loanEditPrincipal}`,
  "InterestRate": `${this.loanEditIntrestRate}`,
  "loanTerm": `${this.loanEditTerm}`
});

const requestOptions : object = {
  method: "post",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

try {
  const response = await fetch("https://loanadminweb-448885887334.us-central1.run.app/loan-submit2", requestOptions);
  const result = await response.json();
  console.log(result);
this.isEditFormHidden  = false; 
this.loanEditName = "";
this.loanEditEmail = "";
this.loanEditStatus = "";
this.loanEditPrincipal= "";
this.loanEditIntrestRate= "";
this.loanEditTerm= "";




} catch (error) {
  console.error(error);
};

  }
    
   async cancelEdit() {
    this.isFormHidden = true
   }

    async getLoans(){
     const myHeaders = new Headers();
  const requestOptions :object= {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

try {
  const response = await fetch("https://loanadminweb-448885887334.us-central1.run.app/loans-api", requestOptions);
  const result = await response.json();
  console.log(result);
  console.log(result.loanResult)
  this.loanList = result.loanResult;

} catch (error) {
  console.error(error);
};
    };

   


    static styles = [
        css`
            :host {
              display: flex;
      flex-direction: column;
      border: solid 3px var(--md-primary-text-color);
      padding: 2em;
      color: var(--md-primary-text-color);  
            }


           .title {
      text-align: center;
    }
    table {
      display: table;
      border-collapse: collapse;
      border-spacing: 1vw;
      margin-top: 15px;
    }
    tr, th, td {
      border: solid 1px;
      text-align: center;
      padding: 5px;
    }
    .hidden {
      display: none;
    }
    .error {
      color: red;
      text-align: center;
      padding: 10px;
    }
    .success {
      color: green;
      text-align: center;
      padding: 10px;
    }
    .no-orders {
      text-align: center;
      padding: 20px;
      color: #666;
    }
    .edit-form {
      background: #f5f5f5;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 15px;
    }
    .edit-form label {
      display: block;
      margin-top: 10px;
    }
    .edit-form input[type="text"] {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      box-sizing: border-box;
    }
    .form-buttons {
      margin-top: 15px;
      display: flex;
      gap: 10px;
    }
    button {
      padding: 5px 10px;
      cursor: pointer;
    }

    .editOrDelete  {
      color: green
    }


        `
    ];

    render() {
        return html`
        
          <div class=${this.isFormHidden ? "hidden" : "edit-form"}>
      <h2 class="title">Edit Loan</h2>
      <form @submit=${this.submitEdit}>
        <label>ID (cannot be edited)</label>
        <input type="text"  .value=${this.loanIDValue}  readonly style="color: rgba(0, 0, 255, .5); background: #eee;">
        <label>Name:</label>
        <input type="text"    .value=${this.loanName} @input=${this.handleNameInput}>
        <label>Email:</label>
        <input type="text"    .value=${this.loanEmail} @input=${this.handleEmailInput}>
        <label>status:</label>
        <select type="text"  value=${this.loanStatus} @input=${this.handleStatusInput}>
         <option value=${this.loanStatus}>  ${this.loanStatus}  </option>
               <option value="Processing">  Processing  </option>
               <option value="Under Review">  Under Review  </option>
               <option value="Approved">  Approved  </option>
        </select>
        <label>Principal:</label>
        <input type="text"    .value=${this.loanPrincipal} @input=${this.handlePrincipalInput}>
        <label>Interest Rate:</label>
        <input type="text"    .value=${this.loanIntrestRate} @input=${this.handleInterestRateInput}>
        <label>Loan Term:</label>
        <input type="text"    .value=${this.loanTerm} @input=${this.handleTermInput}>
         
        

        <div class="form-buttons">
          <button type="submit">Save Changes</button>
          <button type="button" @click=${this.cancelEdit}>Cancel</button>
        </div>
      </form> 
        <div class=${this.isEditFormHidden? "hidden" : "edit-form"}>
             <h2 class="editOrDelete"> Order Edit Successful!</h2>
        </div>
    </div>

        
        
         <button  @click=${this.getLoans}>Get Loans</button>
        <table>
            <thead>
                 <th>ID</th>
                <th>Name</th>
                <th>Phone #</th>
                <th>Email</th>
                <th>Status</th>
                <th>Loan Type</th>
                <th>Principal</th>
                <th>Interest</th>
                <th>Loan Term</th>
                <th>Monthly Payment</th>
                <th>Total Interest Paid</th>
                <th>Total Amount Paid</th>
                <th>EDIT</th>
            </thead>
                ${this.loanList.map((t: any) => html`
            <tbody>
                    <td>${t._id}</td>
                    <td> ${t.name}</td>
                     <td>${t.phoneNumber}</td>
                    <td>${t.email}</td>
                    <td>${t.status}</td>
                    <td> ${t.loanType}</td>
                    <td> ${t.principal} </td>
                    <td> ${t.interestRate} </td>
                    <td> ${t.loanTerm}</td>
                    <td> ${t.MonthlyPayment}</td>
                    <td> ${t.totalInterest}</td>
                    <td> ${t.totalAmountPaid} </td>

                    <td> <button value=${t._id} @click=${this.editLoan} >Edit</button></td>

           </tbody>`)}  
        </table>
        
        
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "loan-widget": LoanWidget;
    }
}

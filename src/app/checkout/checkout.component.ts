import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  checkoutForm!: FormGroup;
  oderid='AX1234567890';
  desc='checkout';
  generatedSignature = '';
  allAcquirerOptions = {
    OB: [
      {
        label: 'B2C',
        options: [
          { value: 'B2C_TEST', label: 'Test Bank B2C' },
          { value: 'B2C_PBB0233', label: 'Public Bank' },
          { value: 'B2C_BKRM0602', label: 'Bank Rakyat' },
          { value: 'B2C_ABMB0212', label: 'Alliance Bank' },
          { value: 'B2C_MB2U0227', label: 'Maybank2U' },
          { value: 'B2C_BIMB0340', label: 'Bank Islam' },
          { value: 'B2C_BMMB0341', label: 'Bank Muamalat' },
          { value: 'B2C_KFH0346', label: 'Kuwait Finance House' },
          { value: 'B2C_ABB0233', label: 'Affin Bank' },
          { value: 'B2C_RHB0218', label: 'RHB Bank' },
          { value: 'B2C_OCBC0229', label: 'OCBC Bank' },
          { value: 'B2C_SCB0216', label: 'Standard Chartered' },
          { value: 'B2C_HLB0224', label: 'Hong Leong Bank' },
          { value: 'B2C_MBB0228', label: 'Maybank2E' },
          { value: 'B2C_UOB0226', label: 'UOB Bank' },
          { value: 'B2C_BCBB0235', label: 'CIMB Clicks' },
          { value: 'B2C_AMBB0209', label: 'AmBank' },
          { value: 'B2C_BSN0601', label: 'Bank Simpanan Nasional' },
          { value: 'B2C_HSBC0223', label: 'HSBC Bank' },
          { value: 'B2C_BOCM01', label: 'Bank of China' },
          {
            value: 'B2C_AGRO01',
            label: 'Bank Pertanian Malaysia Berhad (Agrobank)',
          },
        ],
      },
      {
        label: 'B2B',
        options: [
          { value: 'B2B_TEST', label: 'Test Bank B2B' },
          { value: 'B2B_PBB0233', label: 'Public Bank' },
          { value: 'B2B_ABMB0213', label: 'Alliance Bank' },
          { value: 'B2B_MBB0228', label: 'Maybank2E' },
          { value: 'B2B_BKRM0602', label: 'Bank Rakyat' },
          { value: 'B2B_BIMB0340', label: 'Bank Islam' },
          { value: 'B2B_BMMB0342', label: 'Bank Muamalat' },
          { value: 'B2B_KFH0346', label: 'Kuwait Finance House' },
          { value: 'B2B_ABB0232', label: 'Affin Bank' },
          { value: 'B2B_RHB0218', label: 'RHB Bank' },
          { value: 'B2B_OCBC0229', label: 'OCBC Bank' },
          { value: 'B2B_SCB0215', label: 'Standard Chartered' },
          { value: 'B2B_HLB0224', label: 'Hong Leong Bank' },
          { value: 'B2B_DBB0199', label: 'Deutsche Bank' },
          { value: 'B2B_UOB0227', label: 'UOB Bank' },
          { value: 'B2B_BCBB0235', label: 'CIMB Clicks' },
          { value: 'B2B_AMBB0208', label: 'AmBank' },
          { value: 'B2B_HSBC0223', label: 'HSBC Bank' },
          { value: 'B2B_PBB0234', label: 'Public Bank' },
          { value: 'B2B_ABB0235', label: 'AFFINMAX' },
          { value: 'B2B_BNP003', label: 'BNP Paribas Malaysia' },
          {
            value: 'B2B_AGRO02',
            label: 'Bank Pertanian Malaysia Berhad (Agrobank)',
          },
        ],
      },
    ],
    EW: [
      {
        label: 'eWallet',
        options: [
          { value: '10', label: 'MCash' },
          { value: '11', label: 'Boost' },
          { value: '12', label: 'GrabPay' },
          { value: '13', label: 'Touch N Go' },
          { value: '14', label: 'WannaPay' },
          { value: '17', label: 'ShopeePay' },
          { value: '40', label: 'UnionPay' },
        ],
      },
    ],
  };

  acquirerOptions: {
    label: string;
    options: { value: string; label: string }[];
  }[] = [];

  cartItems = [
    { name: 'Bluetooth Earbuds', price: 50.00, quantity: 2 },
    { name: 'Phone Case', price: 50.00, quantity: 1 },
  ];

  constructor(private fb: FormBuilder,
    private http: HttpClient  
  ) {}

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      customerEmail: ['', [Validators.required, Validators.email]],
      customerName: ['', Validators.required],
      customerPhone: ['', Validators.required],
      paymentMethod: [''],
      acquirerCode: [''],
    });
  }

  onPaymentMethodChange(): void {
    const method = this.checkoutForm.get('paymentMethod')?.value;
    this.acquirerOptions = (this.allAcquirerOptions as any)[method] || [];
    this.checkoutForm.get('acquirerCode')?.reset(); // Clear the acquirer code when payment method changes
  }

  get total(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  generateRandomId(): string {
    const now = new Date();
  
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const randomNum = Math.floor(1000 + Math.random() * 9000); // 4-digit random number
  
    return `${year}${month}${day}${hours}${minutes}${seconds}${randomNum}`;
  }

  async placeOrder() {

    var merhantid = this.generateRandomId();
    const payload = {
      mchtId: 'A25042400289',
      mchtTrxnId: merhantid as string,
      txnAmount: this.total,
      backendUrl: '',
      redirectUrl: '',
      customerEmail: this.checkoutForm.value.customerEmail as string,
      customerName:this.checkoutForm.value.customerName as string,
      customerPhone:this.checkoutForm.value.customerPhone as string,
      orderDescription:this.desc as string,
      paymentMethod:this.checkoutForm.value.paymentMethod as string,
      acquirerCode:this.checkoutForm.value.acquirerCode as string,
      signingKey:'5PNLduW4jxo03pC6pBmHKZ5R',
      orderId:this.oderid,
    }; 

    if (this.checkoutForm.valid) {
      this.checkoutForm.disable();
      const formData = payload;
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://staging.axaipay.my/gateway/v1/payment';

      const { signingKey, orderId, ...filtered } = formData;

      await this.generateHmac(formData).then((signature) => {
        this.generatedSignature = signature;
      });
      const formDataWithSignature = {
        ...filtered,
        signature: this.generatedSignature,
      };
      Object.entries(formDataWithSignature).forEach(([key, value]) => {
        if (formDataWithSignature.hasOwnProperty(key)) {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = String(value);
          form.appendChild(input);
        }
      });

      document.body.appendChild(form);
      form.submit();
    } else {
      console.log('Form is invalid');
    }

    // alert('Order placed successfully!');
  }
  async generateHmac(values: any): Promise<string> {
    console.log({ values });
    const encoder = new TextEncoder();
    const keyData = encoder.encode(values.signingKey);
    var string_sign =
      values.backendUrl +
      values.customerEmail + // customerEmail
      values.customerName + // customerName
      values.customerPhone + // customerPhone
      values.mchtId + // mchtId
      values.mchtTrxnId + // mchtTxnId
      values.orderDescription + // orderDescription
      values.redirectUrl +
      values.txnAmount; // txnAmount
    const messageData = encoder.encode(string_sign);
    console.log({ messageData });
    // Import the key for HMAC
    const cryptoKey = await window.crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: { name: 'SHA-512' } },
      false,
      ['sign']
    );

    // Generate the HMAC signature
    const signature = await window.crypto.subtle.sign(
      'HMAC',
      cryptoKey,
      messageData
    );

    // Convert ArrayBuffer to base64
    return btoa(String.fromCharCode(...new Uint8Array(signature)));
  }

}


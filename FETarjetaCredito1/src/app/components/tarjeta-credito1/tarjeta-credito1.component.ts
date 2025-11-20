import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';

@Component({
  selector: 'app-tarjeta-credito1',
  templateUrl: './tarjeta-credito1.component.html',
  styleUrls: ['./tarjeta-credito1.component.css']
})
export class TarjetaCredito1Component implements OnInit {
  listTarjetas: any[] = [
    {titular: 'Orlando Valle', numeroTarjeta: '712713273', fechaExpiracion:'11/23', cvv:'123'},
    {titular: 'Antonio Orozco', numeroTarjeta: '4432243243', fechaExpiracion:'08/21', cvv:'321'},

  ];


  form: FormGroup;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService) {  
      this.form = this.fb.group({
        titular: ['', Validators.required],
        numeroTarjeta: ['',[Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
        fechaExpiracion: ['',[Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
        cvv: ['',[Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
      })
  }

  ngOnInit(): void {
  }

  agregarTarjeta() {

    const tarjeta: any = {
      
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    };
    this.listTarjetas.push(tarjeta);
    this.toastr.success('Tarjeta agregada correctamente', 'Éxito');
    this.form.reset();
  }

}

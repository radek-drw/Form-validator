class Validator {
   constructor(form) {
      this.form = form;
      this.emailField = document.querySelector('#email');
      this.nameField = document.querySelector('#name');
      this.msgField = document.querySelector('#message');
      this.form.addEventListener('submit', this.validate.bind(this));
   }

   displayErrors(errors, form) {
      let p = form.querySelector('.form-errors');
      if (!p) {
         p = document.createElement('p');
      }
      p.className = 'form-errors';
      p.innerHTML = errors.join('<br>');
      form.insertBefore(p, form.children[0]);
   }

   isEmail(text) {
      return text.indexOf('@') !== -1;
   }

   isNotEmpty(text) {
      return text !== '';
   }

   validate(e) {
      e.preventDefault();
      this.errors = [];

      if (!this.isEmail(this.emailField.value)) {
         this.errors.push('Please enter a valid e-mail address');
         this.emailField.classList.add('invalid');
      } else this.emailField.classList.remove('invalid');

      if (!this.isNotEmpty(this.nameField.value)) {
         this.errors.push('Please enter your name');
         this.nameField.classList.add('invalid');
      } else this.nameField.classList.remove('invalid');

      if (!this.isNotEmpty(this.msgField.value)) {
         this.errors.push('Please enter a message');
         this.msgField.classList.add('invalid');
      } else this.msgField.classList.remove('invalid');

      // Check if all required fields are filled then submit
      if (this.errors.length) this.displayErrors(this.errors, this.form);
      else this.form.submit();
   }
};

const form = new Validator(document.querySelector('.form'));

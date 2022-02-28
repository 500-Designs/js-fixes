    // Show added files on Job Application Form /careers/job-application-form/
    const filesField = $('.elementor-widget-form.elementor-element-1f7abcb form #form-field-attachments');
    let fileList = '<br/>';
    $(filesField).change(function() {
        console.log('typeof: ' + typeof this.files);
        for (var i = 0; i < this.files.length; i++) {
            fileList += '<span>' + this.files[i].name + '</span><br/>';
        }
        $(this).prev('label').append(fileList);
    });

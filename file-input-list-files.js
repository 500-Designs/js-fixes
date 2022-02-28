    // Show added files on Job Application Form /careers/job-application-form/
    const filesField = $('.elementor-widget-form.elementor-element-1f7abcb form #form-field-attachments');
    let labelisAltered = false;
    let fileList;
    $(filesField).change(function() {
        if (this.files.length) {
            for (var i = 0; i < this.files.length; i++) {
                fileList += '<span>' + this.files[i].name + '</span><br/>';
            }
            labelisAltered = true;
        } else {
            $(this).prev('label').html('Attachments');
        }
        if (!labelisAltered) {
            $(this).prev('label').html('Attachments: <br/>' + fileList);
        }
    });

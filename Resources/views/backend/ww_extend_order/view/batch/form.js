//{block name="backend/order/view/batch/form"}
//{$smarty.block.parent}

Ext.define('Shopware.apps.WwExtendBatch.view.batch.Form', {
    override: 'Shopware.apps.Order.view.batch.Form',

    /**
     * Create "Send emails automatically" checkbox.
     *
     * @returns Ext.form.field.Checkbox
     */
    createAutoSendEmailField: function () {
        var me = this;

        return Ext.create('Ext.form.field.Checkbox', {
            name: 'autoSendMail',
            fieldLabel: me.snippets.mail,
            inputValue: true,
            checked: false, // Replace default value 'true'
            uncheckedValue: false,
            disabled: true,
            listeners: {
                scope: me,
                change: function (el) {
                    var me = this,
                        addAttachmentsField = me.getForm().findField('addAttachments'),
                        documentTypeField = me.getForm().findField('documentType');

                    if (el.value === true && documentTypeField.getValue() !== null && documentTypeField.isValid()) {
                        addAttachmentsField.enable();
                        return;
                    }

                    addAttachmentsField.disable();
                },
                disable: function (el) {
                    var me = this,
                        attachmentsField = me.getForm().findField('addAttachments');

                    attachmentsField.setValue(false).disable();
                }
            }
        });
    }
});

//{/block}


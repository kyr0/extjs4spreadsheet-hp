/**
 * Ext Calc example code.
 */
Ext.onReady(function () {

    var fields = ['id', 'firstname', 'lastname', 'age', 'birthday', 'isMember', 'loginCount'],
        dataGenerator = function (count) {

            var data = [];

            // Generate data rows
            for (var i = 0; i < count; i++) {

                data.push({
                    id: i + 1,
                    firstname: 'Eddie ' + (i + 1),
                    lastname: 'User ' + (i + 1),
                    age: parseInt(i + 20),
                    birthday: new Date(),
                    isMember: i % 2 ? true : false,
                    loginCount: parseInt(Math.random()) + i
                });
            }
            return data;
        };

    var localDataStore = new Ext.data.Store({
        storeId: 'persons',
        data: dataGenerator(20),
        proxy: {
            type: 'memory',
            reader: {
                type: 'json'
            }
        },
        fields: fields
    });

    // Create an instance of the Ext Calc panel
    Ext.create('Ext.container.Viewport', {

        items: [
            new Spread.grid.Panel({

                title: 'Users (generated sample data)',

                store: localDataStore,

                // Setting if editing is allowed initially
                editable: true,

                // Configure visible grid columns
                columns: [
                    {
                        xtype: 'spreadheadercolumn',
                        header: 'ID'
                    },
                    {
                        header: 'Last name<br>(editable)',
                        renderer: function (value) {
                            return '<i>' + value + '</i>';
                        },
                        dataIndex: 'lastname',
                        flex: 1
                    },
                    {
                        allowedEditKeys: '0123456789.',
                        header: 'Age<br>(editable)',
                        dataIndex: 'age',
                        xtype: 'numbercolumn'
                    },
                    {
                        header: 'Birthday <br>(not editable)',
                        dataIndex: 'birthday',
                        xtype: 'datecolumn',
                        editable: false
                    }
                ]
            })
        ]
    })
});
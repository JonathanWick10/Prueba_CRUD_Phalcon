var URLdomain = window.location.host + "/CRUDUsuariosJona";
var URLprotocol = window.location.protocol;

function obtenerdatos() {
    window.grid = $('#grid').grid({
        primaryKey: 'id',
        dataSource: URLprotocol + "//" + URLdomain + "/Index/ajax",
        autoLoad: true,
        columns: [{
            field: 'identificacion',
            title: '<h6><span id="titulo">Identificación</span></h6>'
        }, {
            field: 'nombre',
            sortable: true,
            title: '<h6><span id="titulo" >Nombre</span></h6>'
        }, {
            field: 'fecha_de_nacimiento',
            align: "center",
            sortable: true,
            title: '<h6><span id="titulo"">Fecha de Nacimiento</span></h6>',
            width: 180
        }, {
            field: 'genero',
            sortable: true,
            title: '<h6><span id="titulo">Género</span></h6>',
            width: 100
        }, {
            field: 'estado_civil',
            sortable: true,
            title: '<h6><span id="titulo">Estado Civil</span></h6>'
        }, {
            field: 'direccion',
            sortable: true,
            title: '<h6><span id="titulo">Dirección</span></h6>'
        }, {
            field: 'telefono',
            sortable: true,
            title: '<h6><span id="titulo">Teléfono</span></h6>',
            width: 120
        }, {
            field: 'Visualizar',
            width: 64,
            title: '<span id="titulo">Visualizar</span>',
            headerCssClass: 'smallerFont'
        }, {
            field: 'Editar',
            width: 64,
            title: '<span id="titulo">Editar</span>',
            headerCssClass: 'smallerFont'
        }, {
            field: 'Eliminar',
            width: 64,
            title: '<span id="titulo">Eliminar</span>',
            headerCssClass: 'smallerFont'
        }],
        notFoundText: 'No existen Usuarios',
        pager: {
            limit: 5,
            /*leftControls: [
                $('<div title="First" data-role="page-first" class="custom-item"><i class="fa fa-fast-backward" aria-hidden="true" /></div>'),
                $('<div title="Previous" data-role="page-previous" class="custom-item"><i class="fa fa-backward" aria-hidden="true" /></div>'),
                $('<div> Página </div>'),
                $('<div class="custom-item"></div>').append($('<input type="text" data-role="page-number" style="margin: 0 5px; width: 34px; height: 16px; text-align: right;" value="0">')),
                $('<div>de &nbsp; </div>'),
                $('<div data-role="page-label-last" style="margin-right: 5px;">0</div>'),
                $('<div title="Next" data-role="page-next" class="custom-item"><i class="fa fa-forward" aria-hidden="true" /></div>'),
                $('<div title="Last" data-role="page-last" class="custom-item"><i class="fa fa-fast-forward" aria-hidden="true" /></div>'),
                $('<div title="Reload" data-role="page-refresh" class="custom-item"><i class="fa fa-refresh" aria-hidden="true" /></div>'),
                $('<div class="custom-item"></div>').append($('<select data-role="page-size" style="margin: 0 5px; width: 50px;"></select>'))
            ],*/
            rightControls: [
                $('<div>Mostrando &nbsp; </div>'),
                /*$('<div data-role="record-first">0</div>'),*/
                /*$('<div>&nbsp;- &nbsp;</div>'),*/
                /*$('<div data-role="record-last">0</div>'),*/
                /*$('<div>&nbsp;de&nbsp;</div>'),*/
                $('<div data-role="record-total">0</div><div> &nbsp; Registros</div>').css({
                    "margin-right": "5px"
                })
            ]
        }
    });
    window.grid.on('cellDataBound', function(e, $displayEl, id, column, record) {
        var nombre = "'" + record.nombre + "'";
        var fechanacimiento = "'" + record.fecha_de_nacimiento + "'";
        var genero = "'" + record.genero + "'";
        var estado = "'" + record.estado_civil + "'";
        var direc = "'" + record.direccion + "'";
        var telef = "'" + record.telefono + "'";
        if ('Editar' === column.field) {
            //
            $($displayEl).html('<a  title="Editar" href="#" onclick="Edit(' + record.id + ',' + record.identificacion + ',' + nombre + ',' + fechanacimiento + ',' + genero + ',' + estado + ',' + direc + ',' + telef + ');" data-toggle="modal" data-target="#update_new_record_modal"><i class="fa fa-edit fa-lg" style="color: green;"></i> </a>');
        }
        if ('Eliminar' === column.field) {
            //
            $($displayEl).html('<a  title="Eliminar" href="#" onclick="Delete(' + record.identificacion + ',' + record.id + ')" data-toggle="modal" data-target="#delete_new_record_modal"> <i class="fa fa-times-circle fa-lg" style="color: red;"></i> </a>');
        }
        if ('Visualizar' === column.field) {
            //
            $($displayEl).html('<a  title="Editar" href="#" onclick="ViewU(' + record.identificacion + ',' + nombre + ',' + fechanacimiento + ',' + genero + ',' + estado + ',' + direc + ',' + telef + ');" data-toggle="modal" data-target="#view_new_record_modal"><i class="fa fa-eye fa-lg" style="color: blue;"></i> </a>');
        }
    });
}
//Función actualizar Usuario_______________________________
function Edit(Id, Iden, Nom, FechN, Gen, EstC, Dic, Tel) {
    $("#idU").val(Id);
    $('#identificacion2').val(Iden);
    $('#nombre2').val(Nom);
    $('#fecha_de_nacimiento2').val(FechN);
    $('#genero2').val(Gen);
    $('#estado_civil2').val(EstC);
    $('#direccion2').val(Dic);
    $('#telefono2').val(Tel);
    $("#genero2").addClass("form-control");
    $("#estado_civil2").addClass("form-control");
    $("#identificacion2").attr('readonly', '');
    $("#identificacion2").attr("required", "required");
    $("#nombre2").attr("required", "required");
    $("#fecha_de_nacimiento2").attr("required", "required");
    $("#genero2").attr("required", "required");
    $("#estado_civil2").attr("required", "required");
    $("#direccion2").attr("required", "required");
    $("#telefono2").attr("required", "required");
    $("#fecha_de_nacimiento2").attr("type", "date");
    $("#identificacion2").attr("type", "number");
    $("#telefono2").attr("type", "number");
}

function Actualizar() {
    var data = $("#form2").serialize();
    $.ajax({
        url: URLprotocol + "//" + URLdomain + "/Index/update",
        type: "POST",
        data: data,
        contentType: "application/json",
        beforeSend: function(jqXHR, settings) {},
        success: function(data, textStatus, jqXHR) {
            // Check destroy
            grid.reload();
            $('#update_new_record_modal').modal('hide');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            if (jqXHR.status === 0) {
                alert('Not connect: Verify Network.');
            } else if (jqXHR.status == 404) {
                alert('Requested page not found [404]');
            } else if (jqXHR.status == 500) {
                alert('Internal Server Error [500].');
            } else if (textStatus === 'parsererror') {
                alert('Requested JSON parse failed.');
            } else if (textStatus === 'timeout') {
                alert('Time out error.');
            } else if (textStatus === 'abort') {
                alert('Ajax request aborted.');
            } else {
                alert('Uncaught Error: ' + jqXHR.responseText);
            }
        }
    });
}
//Función Eliminar Usuario_____________________________________
function Delete(Id, Titu) {
    $('#IDE').val(Id);
    $('#nomE').val(Titu);
}
//Función visualizar Usuario_______________________________
function ViewU(Iden, Nom, FechN, Gen, EstC, Dic, Tel) {
    $('#identificacion3').val(Iden);
    $('#nombre3').val(Nom);
    $('#fecha_de_nacimiento3').val(FechN);
    $('#genero3').val(Gen);
    $('#estado_civil3').val(EstC);
    $('#direccion3').val(Dic);
    $('#telefono3').val(Tel);
    $("#genero3").addClass("form-control");
    $("#estado_civil3").addClass("form-control");
    $("#genero3").attr('readonly', '');
    $("#estado_civil3").attr('readonly', '');
}

function LimpiarFormularioFunc() {
    $("#identificacion").val("");
    $("#nombre").val("");
    $("#fecha_de_nacimiento").val("@DateTime.Now.ToString('dd/MM/yyyy')");
    $("#genero").val($("#genero option:first").val());
    $("#estado_civil").val($("#estado_civil option:first").val());
    $("#direccion").val("");
    $("#telefono").val("");
}

function buscarFunction() {
    var input, filter, table, tr, td, tds, i;
    input = $("#txtName").val();
    table = document.getElementById("grid");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        td = tr[i].textContent;
        if (td) {
            if (td.indexOf(input) != -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
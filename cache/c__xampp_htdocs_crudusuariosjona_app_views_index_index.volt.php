<div class="page-header">
    <?php echo "<h1>Hola mundo!</h1>";?>
</div>
<?php

echo PHP_EOL;

echo PHP_EOL;

echo $this->tag->linkTo(
    'signup',
    'Crear Usuario'
);
 ?>
 <?= $this->getContent() ?>
 <?php $v27980422361iterated = false; ?><?php $v27980422361iterator = $page->items; $v27980422361incr = 0; $v27980422361loop = new stdClass(); $v27980422361loop->self = &$v27980422361loop; $v27980422361loop->length = count($v27980422361iterator); $v27980422361loop->index = 1; $v27980422361loop->index0 = 1; $v27980422361loop->revindex = $v27980422361loop->length; $v27980422361loop->revindex0 = $v27980422361loop->length - 1; ?><?php foreach ($v27980422361iterator as $usuarios) { ?><?php $v27980422361loop->first = ($v27980422361incr == 0); $v27980422361loop->index = $v27980422361incr + 1; $v27980422361loop->index0 = $v27980422361incr; $v27980422361loop->revindex = $v27980422361loop->length - $v27980422361incr; $v27980422361loop->revindex0 = $v27980422361loop->length - ($v27980422361incr + 1); $v27980422361loop->last = ($v27980422361incr == ($v27980422361loop->length - 1)); ?><?php $v27980422361iterated = true; ?>
    <?php if ($v27980422361loop->first) { ?>
<table class="table table-bordered table-striped" align="center">
    <thead>
        <tr>
            <th>Id</th>
            <th>Usuarios Type</th>
            <th>Name</th>
            <th>Price</th>
            <th>Active</th>
        </tr>
    </thead>
    <tbody>
    <?php } ?>
        <tr>
            <td><?= $Usuarios->identificacion ?></td>
            <td><?= $Usuarios->getUsuariosTypes()->name ?></td>
            <td><?= $Usuarios->nombre ?></td>
            <td>$<?= sprintf('%.2f', $Usuarios->price) ?></td>
            <td><?= $Usuarios->getActiveDetail() ?></td>
            <td width="7%"><?= $this->tag->linkTo(['Usuarioss/edit/' . $Usuarios->id, '<i class="glyphicon glyphicon-edit"></i> Edit', 'class' => 'btn btn-default']) ?></td>
            <td width="7%"><?= $this->tag->linkTo(['Usuarioss/delete/' . $Usuarios->id, '<i class="glyphicon glyphicon-remove"></i> Delete', 'class' => 'btn btn-default']) ?></td>
        </tr>
    <?php if ($v27980422361loop->last) { ?>
    </tbody>
    <!--<tbody>
        <tr>
            <td colspan="7" align="right">
                <div class="btn-group">
                    <?= $this->tag->linkTo(['products/search', '<i class="icon-fast-backward"></i> First', 'class' => 'btn']) ?>
                    <?= $this->tag->linkTo(['products/search?page=' . $page->before, '<i class="icon-step-backward"></i> Previous', 'class' => 'btn']) ?>
                    <?= $this->tag->linkTo(['products/search?page=' . $page->next, '<i class="icon-step-forward"></i> Next', 'class' => 'btn']) ?>
                    <?= $this->tag->linkTo(['products/search?page=' . $page->last, '<i class="icon-fast-forward"></i> Last', 'class' => 'btn']) ?>
                    <span class="help-inline"><?= $page->current ?> of <?= $page->total_pages ?></span>
                </div>
            </td>
        </tr>
    </tbody>-->
</table>
    <?php } ?>
<?php $v27980422361incr++; } if (!$v27980422361iterated) { ?>
    No products are recorded
<?php } ?>

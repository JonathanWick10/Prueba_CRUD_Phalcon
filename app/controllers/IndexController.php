<?php

class IndexController extends ControllerBase
{

    public function indexAction()
    {

    }

    public function ajaxAction()
    {

        if ($this->request->isGet() == true) {

            $users = usuarios::find(
                [
                    'order' => 'id',
                ]
            );

            //deshabilitamos la vista para peticiones ajax
            $this->view->disable();

            //si es una petición get
            if ($this->request->isGet() == true) {
                //si es una petición ajax
                if ($this->request->isAjax() == $users) {
                    $this->response->setJsonContent($users);
                    $this->response->send();
                }
            } else {
                $this->response->setStatusCode(404, "Not Found");
            }
        }
    }

    public function registerAction()
    {

        $user = new Usuarios();

        // Almacenar y comprobar errores
        $success = $user->save(
            $this->request->getPost(),
            [
                "identificacion",
                "nombre",
                "fecha_de_nacimiento",
                "genero",
                "estado_civil",
                "direccion",
                "telefono",
            ]
        );

        if ($success) {
            $this->flash->success(
                "el usuario se agrego!"
            );
        } else {
            echo "Lo sentimos, se generaron los siguiente problemas: ";

            $messages = $user->getMessages();

            foreach ($messages as $message) {
                echo $message->getMessage(), "<br/>";
            }
        }

    }

    public function updateAction()
    {

        $id = $this->request->getPost("idU");

        $usuarios = Usuarios::findFirst($id);

        if (!empty($usuarios)) {
            if ($usuario->update() === false) {
                $messages = $usuario > getMessages();

                foreach ($messages as $message) {
                    $this->flash->error($message);
                }
            }

            $this->flash->success(
                "El usuario se actualizó con éxito"
            );

        } else {
            $this->flash->error(
                "El usuario no existe"
            );
        }
    }

    public function deleteAction()
    {
        $id = $this->request->getPost("nomE");

        $usuarios = Usuarios::findFirst($id);
        if (!empty($usuarios)) {
            if ($usuarios->delete() === false) {
                //deshabilitamos la vista para peticiones ajax
                $this->view->disable();
                echo "Sorry, we can't delete the usuario right now: \n";

                $messages = $usuarios->getMessages();

                foreach ($messages as $message) {
                    echo $message, "\n";
                }
            } else {
                //deshabilitamos la vista para peticiones ajax
                $this->view->disable();

                echo 'The usuario was deleted successfully!';
            }
        }
    }
}

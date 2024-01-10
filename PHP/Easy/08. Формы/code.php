<!-- Сделайте форму с инпутом и флажком. С помощью инпута спросите у пользователя имя. После отправки формы, если флажок был отмечен, поприветствуйте пользователя, а если не был отмечен - попрощайтесь. -->
<form action="" method="POST">
    <input type="text" name="name">
    <input type="checkbox" name="flag">
    <input type="submit">
</form>

<?
if (!empty($_POST)) {
    if(isset($_POST['flag'])) {
        echo "Приветствую, $_POST[name].";
    } else {
        echo "Пока...";
    }
}
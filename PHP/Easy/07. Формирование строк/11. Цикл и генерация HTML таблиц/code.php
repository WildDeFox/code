<?
$arr = [
    ['name' => 'user1', 'age' => 30, 'salary' => 500],
    ['name' => 'user2', 'age' => 31, 'salary' => 600],
    ['name' => 'user3', 'age' => 32, 'salary' => 700],
];

echo "<table>";
foreach ($arr as $user) {
    echo "<tr>";

    echo "<td>$user[name]</td>";
    echo "<td>$user[age]</td>";
    echo "<td>$user[salary]</td>";

    echo "</tr>";
}
echo "</table>";
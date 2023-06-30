<?php
$currentPage = isset($_GET['page']) ? $_GET['page'] : 1; // Get the current page number from the URL
$recordsPerPage = 5; // Number of records to display per page

$conn = new mysqli("localhost", "root", "", "acme");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to fetch data with pagination
$startIndex = ($currentPage - 1) * $recordsPerPage;
$sql = "SELECT * FROM acme.student LIMIT $startIndex, $recordsPerPage";
$result = mysqli_query($conn, $sql);

// Fetch data and display it in a table
if ($result->num_rows > 0) {
    echo "<table>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row["name"] . "</td>";
        echo "<td>" . $row["age"] . "</td>";
        echo "<td>" . $row["gender"] . "</td>";
        echo "<td>" . $row["total"] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
}

// Calculate total number of pages
$totalRecordsQuery = "SELECT COUNT(*) AS total FROM acme.student";
$totalRecordsResult = $conn->query($totalRecordsQuery);
$totalRecords = $totalRecordsResult->fetch_assoc()["total"];
$totalPages = ceil($totalRecords / $recordsPerPage);

// Display navigation buttons
echo "<div class='pagination'>";
if ($currentPage > 1) {
    echo "<a href='read.php?page=" . ($currentPage - 1) . "'>Previous</a>";
}
for ($i = 1; $i <= $totalPages; $i++) {
    echo "<a href='read.php?page=$i'>$i</a>";
}
if ($currentPage < $totalPages) {
    echo "<a href='read.php?page=" . ($currentPage + 1) . "'>Next</a>";
}
echo "</div>";

$conn->close();
?>

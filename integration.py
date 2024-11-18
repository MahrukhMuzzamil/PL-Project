
import cv2
import numpy as np
from acne_scanner import scan_acne
from acne_scar_scanner import scan_acne_scars
from freckle_scanner import scan_freckles
from mole_scanner import scan_moles
from dark_circle_scanner import scan_dark_circles

def integrate_scanners(image_path):
    """
    Integrates separate scanning functionalities for skin conditions into one.

    Parameters:
        image_path (str): Path to the image to be analyzed.

    Returns:
        dict: A dictionary with analysis results for each skin condition.
    """
    try:
        # Load the image
        image = cv2.imread(image_path)
        if image is None:
            raise FileNotFoundError(f"Image not found at {image_path}")

        # Preprocess the image if needed (e.g., resizing, normalization)
        processed_image = preprocess_image(image)

        # Analyze each skin condition
        acne_results = scan_acne(processed_image)
        acne_scar_results = scan_acne_scars(processed_image)
        freckle_results = scan_freckles(processed_image)
        mole_results = scan_moles(processed_image)
        dark_circle_results = scan_dark_circles(processed_image)

        # Compile all results into a single dictionary
        results = {
            "acne": acne_results,
            "acne_scars": acne_scar_results,
            "freckles": freckle_results,
            "moles": mole_results,
            "dark_circles": dark_circle_results,
        }

        return results

    except Exception as e:
        print(f"An error occurred during analysis: {e}")
        return None

def preprocess_image(image):
    """
    Preprocess the image for consistent analysis by all scanning modules.

    Parameters:
        image (numpy.ndarray): The input image.

    Returns:
        numpy.ndarray: The preprocessed image.
    """
    # Example preprocessing: Resize to a standard size, normalize pixel values
    standard_size = (512, 512)
    image_resized = cv2.resize(image, standard_size)
    image_normalized = image_resized / 255.0  # Normalize pixel values to [0, 1]
    return image_normalized

if __name__ == "__main__":
    # Example usage
    test_image_path = "path/to/test/image.jpg"
    analysis_results = integrate_scanners(test_image_path)

    if analysis_results:
        print("Analysis Results:")
        for condition, result in analysis_results.items():
            print(f"{condition.capitalize()}: {result}")

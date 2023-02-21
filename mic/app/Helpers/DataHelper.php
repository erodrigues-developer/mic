<?php

namespace App\Helpers;

class DataHelper
{
    /**
     * Mask the first and last characters of a given document (CPF or CNPJ).
     *
     * @param string $document Document to be masked
     * @return string Masked document
     */
    public static function maskDocument(string $document): string
    {
        if (empty($document) || !self::isValidDocument($document)) {
            return $document;
        }

        $root = self::extractDocumentRoot($document);
        $maskedRoot = self::maskDocumentRoot($root);

        return substr($document, 0, 3) . $maskedRoot . substr($document, -2);
    }

    /**
     * Check if a document is valid (CPF or CNPJ).
     *
     * @param string $document Document to be validated
     * @return bool True if the document is valid, false otherwise
     */
    public static function isValidDocument(string $document): bool
    {
        $digits = preg_replace('/\D/', '', $document);

        return (strlen($digits) === 11 || strlen($digits) === 14);
    }

    /**
     * Extract the root of the document (without the three first and the two last characters).
     *
     * @param string $document Document to extract the root
     * @return string Root of the document
     */
    public static function extractDocumentRoot(string $document): string
    {
        return substr($document, 3, -2);
    }

    /**
     * Mask the root of the document, leaving only the first and last characters.
     *
     * @param string $root Root of the document to be masked
     * @return string Masked root of the document
     */
    public static function maskDocumentRoot(string $root): string
    {
        $maskedRoot = '';
        $rootLength = strlen($root);

        for ($i = 0; $i < $rootLength; $i++) {
            $maskedRoot .= '*';
        }

        return $maskedRoot;
    }

    /**
     * Mask a phone number, leaving visible only the last two digits.
     *
     * @param string $phoneNumber Phone number to be masked
     * @return string Masked phone number
     */
    public static function maskPhoneNumber(string $phoneNumber): string
    {
        if (empty($phoneNumber)) {
            return $phoneNumber;
        }

        return str_repeat('*', strlen($phoneNumber) - 2) . substr($phoneNumber, -2);
    }
}
